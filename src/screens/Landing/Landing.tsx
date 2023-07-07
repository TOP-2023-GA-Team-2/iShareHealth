import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import MainBtn from '../../components/MainBtn/MainBtn';
console.log('Landing');

const Landing = ({navigation}) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text >Welcome to iShareHealth! Your</Text>
      <Text >I want to...</Text>

      <MainBtn text="Enter my test results" />
      <MainBtn onPress={() => navigation.navigate('Log In')} text="Sign in/up" />

    </View>
  );
}

export default Landing;