import { Pressable, View, Text } from "react-native";

const MainBtn = (props) => {
  
  return (
    <View>
      <Pressable onPress={props.onPress} className="bg-emerald-800 w-60 h-10 m-2">{props.children}
        <Text className="flex flex-row justify-center items-center text-white text-lg text-center">{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default MainBtn;