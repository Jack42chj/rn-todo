import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const data = [
    { name: "코딩" },
    { name: "휴식" },
    { name: "코딩테스트 연습" },
    { name: "휴식" },
    { name: "코딩" },
];

const InputModal: React.FC<{
    visible: boolean;
    onCancel: () => void;
    setTask: (items: string) => void;
    handleStart: () => void;
}> = ({ visible, onCancel, setTask, handleStart }) => {
    const [newtask, setNewTask] = useState("");
    const onSubmit = () => {
        if (newtask === "") return;
        setTask(newtask);
        setNewTask("");
        onCancel();
        handleStart();
    };
    const selectSubmit = (item: string) => {
        setTask(item);
        onCancel();
        handleStart();
    };
    return (
        <Modal transparent={true} visible={visible} animationType="none">
            <Pressable style={styles.container} onPress={onCancel}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.kav}
                >
                    <Pressable style={styles.modalView}>
                        <Text style={styles.textTitle}>작업 추가하기</Text>
                        <TextInput
                            returnKeyType="done"
                            placeholder="오늘 할 일 추가하기..."
                            placeholderTextColor="#8b8b8b"
                            style={styles.input}
                            value={newtask}
                            onChangeText={setNewTask}
                            onSubmitEditing={onSubmit}
                        />
                        <View style={styles.recent}>
                            <Fontisto name="history" size={18} color="black" />
                            <Text style={styles.recentTask}>최근 내 작업</Text>
                        </View>
                        <ScrollView style={styles.scroll}>
                            {data.map((item, i) => (
                                <Pressable
                                    style={styles.scrollView}
                                    key={i}
                                    onPress={() => selectSubmit(item.name)}
                                >
                                    <Text style={styles.task}>{item.name}</Text>
                                    <Pressable>
                                        <MaterialIcons
                                            name="cancel"
                                            size={22}
                                            color="grey"
                                        />
                                    </Pressable>
                                </Pressable>
                            ))}
                        </ScrollView>
                    </Pressable>
                </KeyboardAvoidingView>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    kav: {
        width: "100%",
    },
    modalView: {
        width: "100%",
        gap: 20,
        backgroundColor: "#ffffff",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: "center",
        padding: 20,
    },
    btnCancel: {
        backgroundColor: "#E5E6E1",
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 20,
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 600,
    },
    textCancel: {
        fontSize: 16,
    },
    input: {
        width: "95%",
        borderRadius: 999,
        opacity: 0.8,
        paddingVertical: 12,
        paddingLeft: 20,
        fontSize: 16,
        fontWeight: 600,
        minWidth: 240,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    recent: {
        flexDirection: "row",
        gap: 10,
        width: "100%",
        alignItems: "center",
    },
    recentTask: {
        fontSize: 16,
        fontWeight: 600,
    },
    scroll: {
        width: "100%",
        maxHeight: 120,
    },
    task: {
        fontSize: 18,
        paddingVertical: 10,
        color: "grey",
    },
    scrollView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 16,
    },
});

export default InputModal;
