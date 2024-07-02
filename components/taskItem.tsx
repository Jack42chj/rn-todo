import { ScrollView, StyleSheet, Text, View } from "react-native";
import Task from "./task";

const data = [
    {
        name: "코딩 테스트 연습",
        start: "3:00",
        end: "3:25",
        st: "PM",
        ed: "PM",
    },
    { name: "휴식", start: "3:25", end: "3:40", st: "PM", ed: "PM" },
    { name: "프로젝트 코딩", start: "3:40", end: "4:05", st: "PM", ed: "PM" },
];

const colorList = [
    "#E4B875",
    "#B0BBBC",
    "#9CCBC9",
    "#C0CB9C",
    "#BBB2CC",
    "#CB9CA3",
];

const GetRandomColor = () => {
    return colorList[Math.floor(Math.random() * colorList.length)];
};

const TaskItem = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todays Task</Text>
            <ScrollView>
                {data.map((item) => {
                    const backgroundColor = GetRandomColor();
                    return (
                        <View
                            style={[styles.item, { backgroundColor }]}
                            key={item.name}
                        >
                            <Task item={item} />
                        </View>
                    );
                })}
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
        borderRadius: 20,
        marginBottom: 5,
    },
});

export default TaskItem;
