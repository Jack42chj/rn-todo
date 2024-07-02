import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: "main page",
                    headerShown: false,
                    tabBarStyle: { display: "none" },
                }}
            />
            <Tabs.Screen
                name="calendar"
                options={{
                    headerTitle: "calendar page",
                    headerShown: false,
                    tabBarStyle: { display: "none" },
                }}
            />
            <Tabs.Screen
                name="timer"
                options={{
                    headerTitle: "timer page",
                    headerShown: false,
                    tabBarStyle: { display: "none" },
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
