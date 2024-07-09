import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as Notifications from "expo-notifications";
import HeaderSelect from "@/components/headerSelect";
import TimerBtn from "@/components/timerBtn";
import DateItem from "@/components/today/dateItem";
import TaskItem from "@/components/today/taskItem";
import CalenderItem from "@/components/calendar/calendarItem";

const App = () => {
    const [isToday, setToday] = useState(true);
    const today = () => setToday(true);
    const calendar = () => setToday(false);

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: false,
        }),
    });

    const isNotify = async () => {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== "granted") {
            alert("Alarm Event Access Denied!");
        }
    };

    useEffect(() => {
        isNotify();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <HeaderSelect isToday={isToday} today={today} calendar={calendar} />
            {isToday ? (
                <>
                    <DateItem />
                    <TaskItem />
                </>
            ) : (
                <CalenderItem />
            )}
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
