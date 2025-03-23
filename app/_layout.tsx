import { Slot, Stack } from "expo-router";
import { Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return < GestureHandlerRootView style={{flex : 1}}>
            <Stack  screenOptions={{headerShown : false}}>
                <Stack.Screen name="(noBtmBar)/accountInfo" options={{headerShown : true , headerTitle: "Account"}}/>
                </Stack>  
    </GestureHandlerRootView>
}