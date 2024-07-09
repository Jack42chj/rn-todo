import { ImageBackground, Pressable, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";

const image = require("../assets/images/bg.jpg");

const TimerBtn = () => {
    const router = useRouter();
    return (
        <Pressable
            style={styles.container}
            onPress={() => router.push("/timer")}
        >
            <ImageBackground
                source={image}
                style={styles.bgImage}
                resizeMode="cover"
            >
                <Text style={styles.btnText}>25</Text>
            </ImageBackground>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 40,
        left: "50%",
        transform: [{ translateX: -28 }],
        width: 56,
        height: 56,
        borderRadius: 40,
        overflow: "hidden",
        zIndex: 999,
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
    },
    btnText: {
        fontSize: 32,
        color: "#d9d9d9",
    },
});

export default TimerBtn;
