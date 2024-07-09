import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TaskContainer from "./taskContainer";
import { TaskProps } from "@/interface/interface";
import GetCurrentTime from "@/utils/getCurrentTime";
import GetRandomColor from "@/utils/getRandomColor";

const TaskItem = () => {
    const [todo, setTodo] = useState<TaskProps[]>([]);

    // Get Todo List from LocalStorage
    const getTodos = async () => {
        const key = GetCurrentTime().storageKey;
        const res = await AsyncStorage.getItem(key);
        if (res) {
            setTodo(JSON.parse(res));
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todays Task</Text>
            {todo.length ? (
                <ScrollView>
                    {todo.map((item) => {
                        const backgroundColor = GetRandomColor();
                        return (
                            <View
                                style={[
                                    styles.itemWrapper,
                                    { backgroundColor },
                                ]}
                                key={item.name}
                            >
                                <TaskContainer item={item} />
                            </View>
                        );
                    })}
                </ScrollView>
            ) : (
                <View style={styles.emptyWrapper}>
                    <Text style={styles.emptyText}>
                        오늘 할 일을 등록해보세요
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2.5,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 10,
    },
    title: {
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
    itemWrapper: {
        height: 180,
        borderRadius: 20,
        marginBottom: 5,
    },
    emptyWrapper: {
        alignItems: "center",
        justifyContent: "center",
        flex: 0.8,
    },
    emptyText: {
        fontSize: 18,
        color: "grey",
        fontWeight: "bold",
    },
});

export default TaskItem;
