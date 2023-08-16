import { Text, View, Button, Linking} from 'react-native';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import GetStartedBtn from '../../components/GetStartedBtn/GetStartedBtn'

const covidDataURL = 'https://public.tableau.com/app/profile/jacqueline.petersen/viz/GAxTOPVisuals/SocialVulnerabilityIndex'

type OpenURLButtonProps = {
  url: string;
  children: string
}



const GettingStarted = ({navigation}) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text >iShareHealth</Text>
      <Text className='mb-5'>How can we help you today?</Text>

      <View className='flex-row flex-wrap justify-around items-center content-around gap-0'>
        <GetStartedBtn onPress={() => navigation.navigate('ManualResultEntry')}  text="Rapid Report: Share my results" />
        <GetStartedBtn onPress={() => navigation.navigate('Log In')} text="I need help taking my test" />
        <GetStartedBtn onPress={() => Linking.openURL('https://public.tableau.com/app/profile/jacqueline.petersen/viz/GAxTOPVisuals/SocialVulnerabilityIndex')} text="What is my COVID-19 risk?" />
        <GetStartedBtn onPress={() => navigation.navigate('Log In')} text="I need other information" />
      </View>

    </View>
  );
}

export default GettingStarted;