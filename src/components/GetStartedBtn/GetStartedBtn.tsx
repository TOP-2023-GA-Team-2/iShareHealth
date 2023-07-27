import React from "react";
import { Pressable, View, Text } from "react-native";



const GetStartedBtn = (props) => {
  
  return (
    <View>
      <Pressable onPress={props.onPress} className="bg-blue-400 text-black w-20 h-20 m-5">{props.children}
        <Text className="flex flex-row justify-center items-center text-black text-lg text-center">{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GetStartedBtn;