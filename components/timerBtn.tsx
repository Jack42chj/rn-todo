import { useRouter } from "expo-router";
import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

const image = { uri: "./assets/images/bg.jpg" };

const TimerBtn = () => {
    const router = useRouter();
    return (
        <View>
            <Pressable
                style={styles.container}
                onPress={() => router.push("/timer")}
            >
                <ImageBackground
                    source={image}
                    style={styles.image}
                    resizeMode="cover"
                >
                    <Text style={styles.time}>25</Text>
                </ImageBackground>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 40,
        left: "50%",
        transform: [{ translateX: -22 }],
        width: 44,
        height: 44,
        borderRadius: 40,
        overflow: "hidden",
        zIndex: 999,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    image: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
    },
    time: {
        fontSize: 28,
        fontWeight: 100,
        color: "#d9d9d9",
    },
});

export default TimerBtn;
