import { ScrollView, StyleSheet, Text, View } from "react-native";

const TaskItem = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todays Task</Text>
            <ScrollView>
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
        fontWeight: 500,
    },
    item: {
        height: 180,
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        marginBottom: 5,
    },
});

export default TaskItem;
