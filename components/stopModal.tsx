import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const StopModal: React.FC<{
    visible: boolean;
    onCancel: () => void;
    onStop: () => void;
}> = ({ visible, onCancel, onStop }) => {
    return (
        <Modal transparent={true} visible={visible} animationType="fade">
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Text style={styles.textTitle}>정지 하시겠습니까?</Text>
                    <View style={styles.btnWrapper}>
                        <Pressable onPress={onCancel} style={styles.btnCancel}>
                            <Text style={styles.textCancel}>취소</Text>
                        </Pressable>
                        <Pressable onPress={onStop} style={styles.btnPause}>
                            <Text style={styles.textPause}>정지</Text>
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
    modalView: {
        gap: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        alignItems: "center",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    stopText: {
        fontSize: 18,
    },
    btnWrapper: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
    },
    btnCancel: {
        backgroundColor: "#E5E6E1",
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 20,
    },
    btnPause: {
        backgroundColor: "tomato",
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 20,
    },
    textTitle: {
        fontSize: 16,
    },
    textCancel: {
        fontSize: 16,
    },
    textPause: {
        fontSize: 16,
        color: "#ffffff",
    },
});

export default StopModal;
