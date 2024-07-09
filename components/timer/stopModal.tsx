import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const StopModal: React.FC<{
    visible: boolean;
    onCancel: () => void;
    onStop: () => void;
}> = ({ visible, onCancel, onStop }) => {
    return (
        <Modal transparent={true} visible={visible} animationType="fade">
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.text}>정지 하시겠습니까?</Text>
                    <View style={styles.btnWrapper}>
                        <Pressable
                            onPress={onCancel}
                            style={[
                                styles.btnView,
                                { backgroundColor: "#E5E6E1" },
                            ]}
                        >
                            <Text style={styles.text}>취소</Text>
                        </Pressable>
                        <Pressable
                            onPress={onStop}
                            style={[
                                styles.btnView,
                                { backgroundColor: "tomato" },
                            ]}
                        >
                            <Text style={[styles.text, { color: "#ffffff" }]}>
                                정지
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    wrapper: {
        flex: 0.1,
        gap: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        alignItems: "center",
        padding: 20,
    },
    stopText: {
        fontSize: 18,
    },
    btnWrapper: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
    },
    btnView: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E5E6E1",
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default StopModal;
