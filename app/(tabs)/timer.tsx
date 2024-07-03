import BackBtn from "@/components/backBtn";
import StopModal from "@/components/stopModal";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
    Image,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const image = require("../../assets/images/bg.jpg");

const TimerScreen = () => {
    const [timer, setTimer] = useState(15);
    const [active, setActive] = useState(false);
    const [pause, setPause] = useState(false);
    const [modal, setModal] = useState(false);
    const [task, setTask] = useState("");
    const decrement = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timer === 0 && decrement.current !== null) {
            clearInterval(decrement.current);
            decrement.current = null;
            setActive(false);
            setPause(false);
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
        setModal(false);
    };

    const formatTime = () => {
        const getSeconds = `0${timer % 60}`.slice(-2);
        const minutes = Math.floor(timer / 60);
        const getMinutes = `0${minutes}`.slice(-2);
        return `${getMinutes}:${getSeconds}`;
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground source={image} style={styles.image}>
                <BackBtn />
                <TextInput
                    placeholder="작업을 입력하세요..."
                    placeholderTextColor="#454545"
                    value={task}
                    onChangeText={setTask}
                    style={styles.input}
                />
                <View style={styles.timerView}>
                    <Text style={styles.time}>{formatTime()}</Text>
                </View>
                {!active && !pause ? (
                    <Pressable
                        onPress={handleStart}
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
                                    onPress={() => setModal(true)}
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
                    visible={modal}
                    onCancel={() => setModal(false)}
                    onStop={handleStop}
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
        justifyContent: "space-around",
        alignItems: "center",
    },
    input: {
        backgroundColor: "#e1e1e1",
        opacity: 0.8,
        paddingVertical: 12,
        borderRadius: 30,
        textAlign: "center",
        fontWeight: 600,
        minWidth: 160,
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
        fontWeight: 100,
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
        fontWeight: 600,
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
