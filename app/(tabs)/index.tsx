import { useState } from "react";
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import BtmSheet from "@/components/bottomSheet";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpapper } from "@/hooks/useWallpapers";
import Card from "@/components/imageCard";


//entry point for the app
export default function explore() {
    
    const [sheet, setSheet] = useState<Wallpapper | null>(null)
    const wallpapers = useWallpapers();
    return <SafeAreaView style={{flex : 1}}>

        <ParallaxScrollView   
        headerBackgroundColor={{dark : "black", light :" white"}} 
        headerImage={<Image 
        style={{flex: 1}} 
        source={{uri : "https://i.pinimg.com/736x/a3/d4/36/a3d4362f5596302b66c1afa48b1800d5.jpg"}}>
        </Image>}>
        <View style={styles.container}>
            
                <FlatList 
                data={wallpapers.filter((_ , index)=> index % 2 == 0)} 
                renderItem={({item}) =>   <View style={styles.innerContainer}><Card onPress={()=> {
                    setSheet(item)
                }} wallpaper={item}></Card></View> }
                />
           
           <FlatList 
                data={wallpapers.filter((_ , index)=> index % 2 == 1)} 
                renderItem={({item}) =>   <View style={styles.innerContainer}><Card onPress={()=> {
                    setSheet(item)
                }} wallpaper={item}></Card></View> }
                />
        </View>
        </ParallaxScrollView>
        
        {sheet && <BtmSheet 
        wp={sheet}
        onClose={() => {
           setSheet(null)
        }} /> }
                
        {/* <Button title="open sheet" 
        onPress={() => {
            console.log("open")
            setSheet(true);
            
        }}
        ></Button>
        {sheet &&   } */}
       
       
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        flexDirection : "row",
        padding  : 5
        }, 
        innerContainer : {
            flex : 1 ,
            padding : 10, 
        }
})