import { Slot } from "expo-router";
import { Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return < GestureHandlerRootView style={{flex : 1}}>
            <Slot ></Slot>   
    </GestureHandlerRootView>
}