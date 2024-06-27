import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const HeadItem = () => {
    const router = useRouter();
    const [isToday, setToday] = useState(true);
    return (
        <View
            style={[
                styles.header,
                isToday ? styles.headerToday : styles.headerCalendar,
            ]}
        >
            <TouchableOpacity
                onPress={() => {
                    router.push("/");
                    setToday(true);
                }}
            >
                <View style={[styles.btn, isToday && styles.btnActive]}>
                    <Text style={[styles.text, isToday && styles.btnActive]}>
                        Today
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    router.push("/calendar");
                    setToday(false);
                }}
            >
                <View style={[styles.btn, !isToday && styles.btnActive]}>
                    <Text style={[styles.text, !isToday && styles.btnActive]}>
                        Calendar
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 0.8,
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 10,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    headerToday: {
        backgroundColor: "transparent",
    },
    headerCalendar: {
        backgroundColor: "#fff",
    },
    btn: {
        cursor: "pointer",
        width: 115,
        height: 50,
        borderWidth: 2,
        borderColor: "#C0C0C0",
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        fontWeight: 500,
    },
    btnActive: { backgroundColor: "#000", color: "#fff" },
});

export default HeadItem;
