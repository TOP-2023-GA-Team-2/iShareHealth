import { Pressable, View, Text } from "react-native";

const MainBtn = (props) => {
  
  return (
    <View>
      <Pressable className="main-btn">{props.children}
        <Text>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default MainBtn;