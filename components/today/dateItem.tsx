import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const DateItem = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    // Get Current Local Time
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const dayName = dayNames[currentTime.getDay()];

    const month = currentTime.toLocaleString("en-US", { month: "2-digit" });
    const day = currentTime.toLocaleString("en-US", { day: "2-digit" });
    const year = currentTime.getFullYear();

    const hours = currentTime.getHours();
    const minutes = currentTime.toLocaleString("ko-KR", { minute: "2-digit" });
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const displayHours = hours % 12 === 0 ? 12 : hours % 12;
    const ampm = hours < 12 ? "AM" : "PM";

    return (
        <View style={styles.container}>
            <Text style={[styles.text, { fontWeight: "bold" }]}>{dayName}</Text>
            <View style={styles.wrapper}>
                <View style={styles.box1}>
                    <Text style={styles.date}>
                        {month}.{day}
                    </Text>
                    <Text style={styles.date}>{year}</Text>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.time}>
                        {displayHours.toLocaleString("en-US", {
                            minimumIntegerDigits: 2,
                        })}
                        :{formattedMinutes} {ampm}
                    </Text>
                    <Text style={styles.text}>SEOUL</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 30,
    },
    text: {
        fontSize: 16,
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    box1: {
        flex: 1.4,
    },
    box2: {
        flex: 1,
        borderLeftWidth: 1,
        paddingLeft: 20,
    },
    date: {
        fontSize: 64,
    },
    time: {
        fontSize: 32,
    },
});

export default DateItem;
