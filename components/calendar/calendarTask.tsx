import { StyleSheet, Text, View } from "react-native";

const CalendarTask = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.day}>Tuesday</Text>
            <View style={styles.wrapper}>
                <View>
                    <Text style={styles.date}>15</Text>
                    <Text style={[styles.date, { lineHeight: 30 }]}>JUL</Text>
                </View>
                <View></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    day: {
        fontWeight: "500",
        fontSize: 16,
    },
    wrapper: {
        flexDirection: "row",
        marginTop: 0,
    },
    date: {
        fontSize: 52,
        fontWeight: "500",
    },
});

export default CalendarTask;
