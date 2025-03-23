import { Image, StyleSheet, View } from "react-native";
import { Wallpapper, useWallpapers } from "@/hooks/useWallpapers";
export default function Card({wallpaper} : {
    wallpaper : Wallpapper
}) {
    return <View>
        <Image source={{uri: wallpaper.uri}} style={styles.image}>
        </Image>
    </View>
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height : 300,
        borderRadius : 20
    }
})