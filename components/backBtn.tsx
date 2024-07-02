import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

const BackBtn = () => {
    const router = useRouter();
    return (
        <Pressable style={styles.container} onPress={() => router.back()}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
            </svg>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 20,
        left: 20,
        width: 28,
        height: 28,
        zIndex: 999,
    },
    image: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
    },
});

export default BackBtn;
