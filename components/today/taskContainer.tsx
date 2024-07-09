import { StyleSheet, Text, View } from "react-native";
import { TaskProps } from "@/interface/interface";
import GetStartTime from "@/utils/getStartTime";

const TaskContainer: React.FC<{
    item: TaskProps;
}> = ({ item }) => {
    const startTime = GetStartTime(item.end + " " + item.ed);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.wrapper}>
                <View style={styles.timeView}>
                    <Text style={styles.time}>{startTime}</Text>
                    <Text>Start</Text>
                </View>
                <View style={styles.minView}>
                    <Text style={styles.min}>25 Min</Text>
                </View>
                <View style={styles.timeView}>
                    <Text style={styles.time}>
                        {item.end} {item.ed}
                    </Text>
                    <Text>End</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "space-around",
        gap: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    timeView: {
        gap: 5,
    },
    time: {
        fontSize: 24,
    },
    minView: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 50,
    },
    min: {
        color: "#d9d9d9",
        fontWeight: "bold",
    },
});

export default TaskContainer;
