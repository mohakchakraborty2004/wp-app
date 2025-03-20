import { Link, Slot } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function Layout() {
    return <SafeAreaView>
        <Text>hi there</Text>
        <View style ={{backgroundColor : "yellow"}}>
        <Link href={'/account'}>
           <Text> account</Text>
        </Link>
        <Link href={'/foryou'}>
           <Text>for you</Text>
        </Link>
        <Link href={'/wall'}>
           <Text>wall</Text>
        </Link>
        </View>

        <Slot></Slot>
    
    </SafeAreaView>
}