import { StatusBar } from "expo-status-bar";
import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GetCurrentTime from "@/utils/getCurrentTime";
import PrevBtn from "@/components/timer/prevBtn";
import StopModal from "@/components/timer/stopModal";
import InputModal from "@/components/timer/inputModal";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

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
            saveTodos();
            sendNotify();
            setTask("");
        }
    }, [timer]);

    // Timer Count Start
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

    // Timer Count Resume
    const handleContinue = () => {
        decrement.current = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        setActive(true);
        setPause(false);
    };

    // Timer Count Stop & Initialization
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

    // Timer Time Count
    const formatTime = () => {
        const getSeconds = `0${timer % 60}`.slice(-2);
        const minutes = Math.floor(timer / 60);
        const getMinutes = `0${minutes}`.slice(-2);
        return `${getMinutes}:${getSeconds}`;
    };

    // Send Push Alarm
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

    // Save Task to LocalStorage
    const saveTodos = async () => {
        const currentTime = GetCurrentTime();
        const key = currentTime.storageKey;
        const existingData = await AsyncStorage.getItem(key);
        let todos = [];
        if (existingData) {
            todos = JSON.parse(existingData);
        }
        const data = [
            {
                date: key,
                name: task,
                end: `${currentTime.displayHours}:${currentTime.minutes}`,
                ed: currentTime.ampm,
            },
            ...todos,
        ];
        await AsyncStorage.setItem(key, JSON.stringify(data));
    };

    // Stop & Delete Current Working Task
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
                        style={styles.inputBox}
                    >
                        <Text style={styles.placeholder}>
                            작업을 입력하세요...
                        </Text>
                    </Pressable>
                ) : (
                    <View style={styles.outerRowBox}>
                        <View style={styles.innerRowBox}>
                            <AntDesign
                                name="pushpin"
                                size={18}
                                color="tomato"
                            />
                            <Text style={styles.task}>{task}</Text>
                        </View>
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
                        <Ionicons name="play" size={18} color="black" />
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
    inputBox: {
        backgroundColor: "#c5c5c5",
        paddingVertical: 12,
        borderRadius: 30,
        width: 180,
        opacity: 0.8,
    },
    placeholder: {
        fontSize: 16,
        textAlign: "center",
        color: "#6b6b6b",
        fontWeight: "bold",
    },
    outerRowBox: {
        backgroundColor: "#ffffff",
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "95%",
        borderRadius: 6,
    },
    innerRowBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    task: {
        fontSize: 18,
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
});

export default TimerScreen;
