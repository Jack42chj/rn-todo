import DateItem from "@/components/dateItem";
import HeadItem from "@/components/headItem";
import TaskItem from "@/components/taskItem";
import TimerBtn from "@/components/timerBtn";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <HeadItem />
            <DateItem />
            <TaskItem />
            <TimerBtn />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E5E6E1",
        fontFamily: "Pretendard",
    },
});

export default App;
