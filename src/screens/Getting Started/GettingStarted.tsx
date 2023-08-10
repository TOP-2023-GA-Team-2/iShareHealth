import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import GetStartedBtn from '../../components/GetStartedBtn/GetStartedBtn'

const GettingStarted = ({navigation}) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text >iShareHealth</Text>
      <Text >How can we help you today?</Text>

      <View className='flex-row flex-wrap m-0 justify-around items-center content-around gap-0'>
        <GetStartedBtn text="Rapid Report: Share my results" />
        <GetStartedBtn onPress={() => navigation.navigate('Log In')} text="I need help taking my test" />
        <GetStartedBtn onPress={() => navigation.navigate('Log In')} text="What is my COVID-19 risk?" />
        <GetStartedBtn onPress={() => navigation.navigate('Log In')} text="I need other information" />
      </View>

    </View>
  );
}

export default GettingStarted;