
import { View, Text, Button, SafeAreaView } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';




const Tab = createMaterialTopTabNavigator();

export default function foryou() {
   return  <Tab.Navigator>
   <Tab.Screen name="Liked" component={liked} />
   <Tab.Screen name="Library" component={library} />
 </Tab.Navigator>
}

function library() {
   return <SafeAreaView>
       <Text>
           for you.
       </Text>
   </SafeAreaView>
}

function liked() {
   return <SafeAreaView>
       <Text>
           for you.
       </Text>
   </SafeAreaView>
}