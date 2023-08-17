import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';



import MainBtn from '../../components/MainBtn/MainBtn';
console.log('Landing');

const Landing = ({navigation}) => {
  return (
    <View className='flex-1 justify-center items-center'>


      <Text className='text-center m-5'>Stay informed and connected with iShareHealth, the ultimate COVID test app</Text>


      <MainBtn onPress={() => navigation.navigate('Get Started')} text="Continue as Guest" />
      <MainBtn onPress={() => navigation.navigate('Log In')} text="Sign In" />
      <MainBtn onPress={() => navigation.navigate('Log In')} text="Register" />

    </View>
  );
}

export default Landing;