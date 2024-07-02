import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HeadItem from "@/components/headItem";
import CalanderItem from "@/components/calanderItem";

const Calendar = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <HeadItem />
            <CalanderItem />
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

export default Calendar;
