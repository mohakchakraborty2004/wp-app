import { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import BtmSheet from "@/components/bottomSheet";

export default function foryou() {
    
    const [sheet, setSheet] = useState<boolean>(false)

    return <SafeAreaView>
        <Text>
            for you.
        </Text>
        <Button title="open sheet" 
        onPress={() => {
            setSheet(true);
        }}
        ></Button>
        {sheet &&   <BtmSheet/>}
       
       
    </SafeAreaView>
}