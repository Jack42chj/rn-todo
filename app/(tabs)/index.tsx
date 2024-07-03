import HeaderSelect from "@/components/headerSelect";
import TimerBtn from "@/components/timerBtn";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CalendarScreren from "./calendar";
import TodayScreen from "./today";

const App = () => {
    const [isToday, setToday] = useState(true);
    const today = () => setToday(true);
    const calendar = () => setToday(false);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <HeaderSelect isToday={isToday} today={today} calendar={calendar} />
            {isToday ? <TodayScreen /> : <CalendarScreren />}
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
