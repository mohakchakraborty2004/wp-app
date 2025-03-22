import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";

export default function Layout() {
    return <View>
        <Link href={"/(tabs)/account"}>
          <Text style={{backgroundColor: "black", textDecorationColor : "white"}}>go Back</Text>
        </Link>
        <Slot></Slot>
    </View>
}