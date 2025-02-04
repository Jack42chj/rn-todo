import { Text, View, StyleSheet, Pressable } from "react-native";
import { TodayProps } from "@/interface/interface";

const HeaderSelect: React.FC<TodayProps> = ({ isToday, today, calendar }) => {
    return (
        <View style={styles.wrapper}>
            <View
                style={[
                    styles.header,
                    isToday
                        ? { backgroundColor: "tranparent" }
                        : { backgroundColor: "#fff" },
                ]}
            >
                <Pressable onPress={today}>
                    <View
                        style={[styles.btnWrapper, isToday && styles.btnActive]}
                    >
                        <Text
                            style={[styles.text, isToday && styles.btnActive]}
                        >
                            Today
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={calendar}>
                    <View
                        style={[
                            styles.btnWrapper,
                            !isToday && styles.btnActive,
                        ]}
                    >
                        <Text
                            style={[styles.text, !isToday && styles.btnActive]}
                        >
                            Calendar
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 0.8,
        flexDirection: "row",
        alignItems: "flex-end",
    },
    header: {
        flexDirection: "row",
        flex: 1,
        paddingTop: 20,
        gap: 10,
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    btnWrapper: {
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
        fontWeight: "bold",
    },
    btnActive: { backgroundColor: "#000", color: "#fff" },
});

export default HeaderSelect;
