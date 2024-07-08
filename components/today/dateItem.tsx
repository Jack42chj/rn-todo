import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const DateItem = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
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
            <Text style={styles.day}>{dayName}</Text>
            <View style={styles.outer}>
                <View style={styles.inner1}>
                    <Text style={styles.date}>
                        {month}.{day}
                    </Text>
                    <Text style={styles.date}>{year}</Text>
                </View>
                <View style={styles.inner2}>
                    <Text style={styles.time}>
                        {displayHours.toLocaleString("en-US", {
                            minimumIntegerDigits: 2,
                        })}
                        :{formattedMinutes} {ampm}
                    </Text>
                    <Text style={styles.region}>SEOUL</Text>
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
    day: {
        fontSize: 16,
        fontWeight: "bold",
    },
    outer: {
        flexDirection: "row",
        alignItems: "center",
    },
    inner1: {
        flex: 1.4,
    },
    inner2: {
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
    region: {
        fontSize: 16,
    },
});

export default DateItem;
