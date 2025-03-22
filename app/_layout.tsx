import { Slot } from "expo-router";
import { Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return < GestureHandlerRootView>
    <Text>Hello</Text>
            <Slot></Slot>   
    </GestureHandlerRootView>
}