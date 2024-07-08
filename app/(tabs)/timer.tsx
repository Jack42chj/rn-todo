import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import * as Notifications from "expo-notifications";
import PrevBtn from "@/components/timer/prevBtn";
import StopModal from "@/components/timer/stopModal";
import InputModal from "@/components/timer/InputModal";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

const image = require("../../assets/images/bg.jpg");

const TimerScreen = () => {
    const [timer, setTimer] = useState(1500);
    const [active, setActive] = useState(false);
    const [pause, setPause] = useState(false);
    const [stopModal, setStopModal] = useState(false);
    const [inputModal, setInputModal] = useState(false);
    const [task, setTask] = useState("");
    const decrement = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timer === 0 && decrement.current !== null) {
            clearInterval(decrement.current);
            decrement.current = null;
            setActive(false);
            setPause(false);
            setTimer(1500);
            sendNotify();
        }
    }, [timer]);

    const handleStart = () => {
        if (!active && !pause) {
            decrement.current = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            setActive(true);
        } else if (decrement.current !== null) {
            clearInterval(decrement.current);
            setActive(false);
            setPause(true);
        }
    };

    const handleContinue = () => {
        decrement.current = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        setActive(true);
        setPause(false);
    };

    const handleStop = () => {
        if (decrement.current !== null) {
            clearInterval(decrement.current);
            decrement.current = null;
        }
        setTimer(1500);
        setActive(false);
        setPause(false);
        setStopModal(false);
        setTask("");
    };

    const formatTime = () => {
        const getSeconds = `0${timer % 60}`.slice(-2);
        const minutes = Math.floor(timer / 60);
        const getMinutes = `0${minutes}`.slice(-2);
        return `${getMinutes}:${getSeconds}`;
    };

    const sendNotify = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: task,
                body: "작업이 완료되었습니다.",
                sound: "default",
                vibrate: [0, 250, 250, 250],
            },
            trigger: null,
        });
    };

    const onClickTaskCancel = () => {
        setStopModal(true);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground source={image} style={styles.image}>
                <PrevBtn />
                {task === "" ? (
                    <Pressable
                        onPress={() => setInputModal(true)}
                        style={styles.input}
                    >
                        <Text style={styles.inputText}>
                            작업을 입력하세요...
                        </Text>
                    </Pressable>
                ) : (
                    <View style={styles.work}>
                        <Text>{task}</Text>
                        <Pressable onPress={onClickTaskCancel}>
                            <MaterialIcons
                                name="cancel"
                                size={22}
                                color="grey"
                            />
                        </Pressable>
                    </View>
                )}
                <View style={styles.timerView}>
                    <Text style={styles.time}>{formatTime()}</Text>
                </View>
                {!active && !pause ? (
                    <Pressable
                        onPress={() => setInputModal(true)}
                        style={styles.btnStartView}
                    >
                        <View style={styles.btnStartimg}>
                            <Ionicons name="play" size={18} color="black" />
                        </View>
                        <Text style={styles.btnText}>시작하기</Text>
                    </Pressable>
                ) : (
                    <>
                        {active ? (
                            <Pressable
                                onPress={handleStart}
                                style={styles.btnStopView}
                            >
                                <Text style={[styles.btnText, styles.btnStop]}>
                                    일시정지
                                </Text>
                            </Pressable>
                        ) : (
                            <View style={styles.btnBox}>
                                <Pressable
                                    style={[styles.btnStartView, styles.btnPad]}
                                    onPress={handleContinue}
                                >
                                    <Text style={styles.btnText}>계속</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.btnStopView, styles.btnPad]}
                                    onPress={() => setStopModal(true)}
                                >
                                    <Text
                                        style={[styles.btnText, styles.btnStop]}
                                    >
                                        정지
                                    </Text>
                                </Pressable>
                            </View>
                        )}
                    </>
                )}
                <StopModal
                    visible={stopModal}
                    onCancel={() => setStopModal(false)}
                    onStop={handleStop}
                />
                <InputModal
                    visible={inputModal}
                    onCancel={() => setInputModal(false)}
                    setTask={setTask}
                    handleStart={handleStart}
                />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    input: {
        backgroundColor: "#c5c5c5",
        paddingVertical: 12,
        borderRadius: 30,
        width: 180,
        opacity: 0.8,
    },
    inputText: {
        fontSize: 16,
        textAlign: "center",
        color: "#6b6b6b",
        fontWeight: "bold",
    },
    timerView: {
        borderWidth: 2,
        width: 260,
        height: 260,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#ffffff",
    },
    time: {
        fontSize: 64,
        color: "#ffffff",
    },
    btnStartView: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#ffffff",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    btnStopView: {
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#ffffff",
    },
    btnStartimg: {
        width: 18,
        height: 18,
    },
    btnText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    btnStop: {
        color: "#ffffff",
    },
    btnBox: {
        flexDirection: "row",
        gap: 20,
    },
    btnPad: {
        paddingHorizontal: 30,
    },
    work: {
        backgroundColor: "#ffffff",
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "95%",
        borderRadius: 6,
    },
});

export default TimerScreen;
