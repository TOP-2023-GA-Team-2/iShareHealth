import React from "react";
import { Pressable, View, Text } from "react-native";



const GetStartedBtn = (props) => {
  
  return (
    <View>
      <Pressable onPress={props.onPress} className="bg-white border-solid border-2 border-emerald-600 rounded-[15px] text-black w-[140px] h-[140px] mb-2 flex-wrap text-center justify-center items-center content-center flex-wrap">{props.children}
        <Text className="flex flex-row text-black text-sm text-center flex-wrap w-[120px] ">{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GetStartedBtn;