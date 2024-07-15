import GetRandomColor from "@/utils/getRandomColor";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import CalendarTask from "./calendarTask";

const monthList = [
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
];

const todo = ["ㅁㄴㅇ"];

const CalenderItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.month}
                >
                    {monthList.map((item) => (
                        <View style={styles.box} key={item}>
                            <Text style={styles.text}>{item}</Text>
                        </View>
                    ))}
                </ScrollView>
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
                                    key={item}
                                >
                                    <CalendarTask />
                                </View>
                            );
                        })}
                    </ScrollView>
                ) : (
                    <View style={styles.emptyWrapper}>
                        <Text style={styles.emptyText}>
                            진행된 일정이 없습니다
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
};

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: "#ffffff",
        paddingHorizontal: 10,
    },
    wrapper: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#f6f6f6",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: "column",
    },
    month: {
        padding: 10,
    },
    box: {
        width: SCREEN_WIDTH,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: 600,
    },
    task: {
        marginTop: 10,
        flex: 1,
        flexDirection: "column",
    },
    item: {
        height: 180,
        backgroundColor: "#BBB2CC",
        borderRadius: 20,
        marginBottom: 5,
    },
    itemWrapper: {
        height: 180,
        borderRadius: 20,
        marginBottom: 5,
    },
    emptyWrapper: {
        alignItems: "center",
        justifyContent: "center",
        flex: 5,
    },
    emptyText: {
        fontSize: 18,
        color: "grey",
        fontWeight: "bold",
    },
});

export default CalenderItem;
