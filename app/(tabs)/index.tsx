import { useState } from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import BtmSheet from "@/components/bottomSheet";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpapper } from "@/hooks/useWallpapers";
import Card from "@/components/imageCard";


//entry point for the app
export default function explore() {
    
    const [sheet, setSheet] = useState<boolean>(false)
    const wallpapers = useWallpapers();
    return <SafeAreaView style={{flex : 1}}>

        <ParallaxScrollView   
        headerBackgroundColor={{dark : "black", light :" white"}} 
        headerImage={<Image 
        style={{flex: 1}} 
        source={{uri : "https://i.pinimg.com/736x/a3/d4/36/a3d4362f5596302b66c1afa48b1800d5.jpg"}}>
        </Image>}>
        <View style={styles.container}>
            <View style={styles.innerContainer}>
            {wallpapers.map((w : Wallpapper) => <Card wallpaper={w}></Card>)}
            </View>
            <View style={styles.innerContainer}>
            {wallpapers.map((w : Wallpapper) => <Card wallpaper={w}></Card>)}
            </View>
        </View>
        </ParallaxScrollView>
        
      
        {/* <Button title="open sheet" 
        onPress={() => {
            console.log("open")
            setSheet(true);
            
        }}
        ></Button>
        {sheet &&   <BtmSheet onClose={() => {
            setSheet(false)
        }} />} */}
       
       
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        flexDirection : "row",
        padding  : 5
        }, 
        innerContainer : {
            flex : 0.5 ,
            padding : 10
        }
})