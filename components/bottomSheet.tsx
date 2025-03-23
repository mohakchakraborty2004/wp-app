import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpapper } from '@/hooks/useWallpapers';

function DownloadBtn( ) {
  return <Pressable style={{}} >
    <View style={styles.button}>
    <Text style={{padding:10 , color : "white", fontWeight : "bold"}}>
      Download
    </Text>
    </View>
   
  </Pressable>
}

const BtmSheet = ({onClose, wp} : {onClose : () => void; 
  wp : Wallpapper
 } ) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

 const snapPoints = useMemo(() => ['25%', '50%', '95%'], []);
  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    
        <BottomSheet
        onClose={onClose}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
       snapPoints={["99%"]}
      //  index={2} 
       enablePanDownToClose={true}
       handleIndicatorStyle={{height : 0}}
       handleStyle={{display : 'none'}}
      >
        <BottomSheetView style={styles.imgContainer}>
          
                <Image style={styles.img} source={{uri : wp.uri}}></Image>
                  <View style= {styles.labelContainer} >
                      <Text style={styles.label}>
                      {wp.name}
                      </Text>
                </View>
          
          <DownloadBtn />
        </BottomSheetView>
      </BottomSheet>
        
  );
};

const styles = StyleSheet.create({
 
  imgContainer : {
    flex : 1,
  }, 
  img : {
    flex : 1 ,
    borderTopLeftRadius : 15,
    borderTopRightRadius : 15
  }, 
  label : {
    color : "white",
    fontWeight : "bold",
    fontSize : 20,
    fontStyle : "italic"
  },
  labelContainer : {
    position : "absolute",
    padding : 10,
    display : "flex",
    justifyContent : "center",
    width : "100%",
    alignItems : "center",
    
  },
  button : {
    position : "absolute" ,
    bottom : 0,
     backgroundColor : "black", 
     alignItems : "center",
     marginHorizontal : 70 ,
     width : 250,
    justifyContent : "center",
    marginVertical : 30,
    padding : 8,
    borderRadius :20
  }
});

export default BtmSheet;