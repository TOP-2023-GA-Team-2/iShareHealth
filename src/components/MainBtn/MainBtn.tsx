import { Pressable, View, Text, StyleSheet } from "react-native";

const MainBtn = (props) => {
  
  return (
    <View className=" ">
      <Pressable onPress={props.onPress} className="bg-emerald-800  w-60 h-10 m-2 ">{props.children}
      <View className="text-container " style={styles.container} >
        <Text className="text-white text-lg text-center" style={styles.headerText}>{props.text}</Text>
      </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
  
    textAlign: "center",
  
  },
  
});

export default MainBtn;