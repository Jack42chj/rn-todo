import { Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const PrevBtn = () => {
    const router = useRouter();
    return (
        <Pressable style={styles.container} onPress={() => router.back()}>
            <Ionicons name="chevron-down-sharp" size={28} color="white" />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 80,
        left: 20,
        width: 28,
        height: 28,
        zIndex: 999,
    },
});

export default PrevBtn;
