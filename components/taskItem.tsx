import { ScrollView, StyleSheet, Text, View } from "react-native";

const TaskItem = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todays Task</Text>
            <ScrollView style={styles.task}>
                <View style={styles.item}></View>
                <View style={styles.item}></View>
                <View style={styles.item}></View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2.5,
        backgroundColor: "#f5f5f5",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 10,
    },
    title: {
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 500,
    },
    task: {
        gap: 40,
    },
    item: {
        height: 180,
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        marginBottom: 10,
    },
});

export default TaskItem;
