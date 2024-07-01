import { useEffect, useRef, useState } from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const image = { uri: "./assets/images/bg.jpg" };

const Timer = () => {
    const [timer, setTimer] = useState(25 * 60);
    const [active, setActive] = useState(false);
    const [task, setTask] = useState("");
    const decrement = useRef(null);

    useEffect(() => {
        if (timer === 0) {
            clearInterval(decrement.current);
            setActive(false);
        }
    }, [timer]);

    const handleStart = () => {
        if (!active) {
            decrement.current = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            clearInterval(decrement.current);
        }
        setActive(!active);
    };

    const formatTime = () => {
        const getSeconds = `0${timer % 60}`.slice(-2);
        const minutes = `${Math.floor(timer / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);

        return `${getMinutes}:${getSeconds}`;
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
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
                <TouchableOpacity onPress={handleStart} style={styles.btnView}>
                    <Text style={styles.buttonText}>
                        {!active ? "집중 시작하기" : "일시정지"}
                    </Text>
                </TouchableOpacity>
                {/* {!active && (
                    <View>
                        <TouchableOpacity>
                            <Text>계속</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>정지</Text>
                        </TouchableOpacity>
                    </View>
                )} */}
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
    btnView: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 600,
    },
});

export default Timer;
