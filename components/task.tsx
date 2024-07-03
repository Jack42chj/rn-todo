import { TaskProps } from "@/interface/interface";
import TimeDifference from "@/utils/timeDiffer";
import { StyleSheet, Text, View } from "react-native";

const Task: React.FC<{
    item: TaskProps;
}> = ({ item }) => {
    const difference = TimeDifference(item);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.wrapper}>
                <View style={styles.timeView}>
                    <Text style={styles.time}>
                        {item.start} {item.st}
                    </Text>
                    <Text>Start</Text>
                </View>
                <View style={styles.minView}>
                    <Text style={styles.min}>{difference} Min</Text>
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
        fontWeight: 600,
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
    },
});

export default Task;
