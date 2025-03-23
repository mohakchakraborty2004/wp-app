import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Wallpapper, useWallpapers } from "@/hooks/useWallpapers";
export default function Card({wallpaper , onPress} : {
    wallpaper : Wallpapper; 
    onPress : () => void;
}) {
    return <Pressable onPress={onPress}>
         <View>
        <Image source={{uri: wallpaper.uri}} style={styles.image}>
        </Image>
        <View style={styles.textContainer}>
        <Text style={{color : "white", fontStyle: "italic", fontWeight: "bold"}} >{wallpaper.name}</Text>
        </View>
       
    </View>
    </Pressable>
   
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height : 300,
        borderRadius : 20
    },
    textContainer : {
        position : "absolute",
        bottom: 0,
        backgroundColor : "rgba(0, 0, 0, 0.7)",
        display : "flex",
        width : "100%",
        padding : 8, 
        borderBottomRightRadius : 20,
        borderBottomLeftRadius : 20
    }
})