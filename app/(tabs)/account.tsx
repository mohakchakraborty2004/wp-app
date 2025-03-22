import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function account() {
    return <SafeAreaView>
        <Text>
            account.
        </Text>

        <Link href={'/(noBtmBar)/accountInfo'}>
        Account Info
        </Link>
    </SafeAreaView>
}