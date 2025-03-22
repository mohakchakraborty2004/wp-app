import { FontAwesome } from "@expo/vector-icons";
import { Link, Slot, Tabs } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function Layout() {
    return <Tabs screenOptions={{tabBarActiveTintColor: "blue", headerShown : false}}>

      <Tabs.Screen  
      name="index" // index.tsx
      options={{
         title: "Home",
         tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color} />
      }}
      />

   <Tabs.Screen  
      name="foryou" //foryou.tsx
      options={{
         title: "fyp",
         tabBarIcon: ({color}) => <FontAwesome size={28} name="cogs" color={color} />
      }}
      />

<Tabs.Screen  
      name="account"
      options={{
         title: "Account",
         tabBarIcon: ({color}) => <FontAwesome size={28} name="cogs" color={color} />
      }}
      />

    </Tabs>
}