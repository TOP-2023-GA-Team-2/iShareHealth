import { Text, View, Button, Linking} from 'react-native';
import { useCallback } from 'react';
import MainBtn from '../../components/MainBtn/MainBtn';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import GetStartedBtn from '../../components/GetStartedBtn/GetStartedBtn'

const covidNationalURL = 'https://public.tableau.com/app/profile/jacqueline.petersen/viz/GAxTOPVisuals/SocialVulnerabilityIndex'

const covidLocalURL = 'https://ihealthshare-ehhwhvzvghe6f5hiru7e8t.streamlit.app/'

const RiskResources = ({navigation}) => {
  return (
    <BackgroundImage>

    <View className='flex-1 justify-center items-center'>
      <Text >iShareHealth</Text>
      <Text className='mb-5'>How can we help you today?</Text>

      <View className='flex-row flex-wrap justify-around items-center content-around gap-0'>
       
        <MainBtn onPress={() => Linking.openURL(covidNationalURL)} text="See National Statistics" />
        <MainBtn onPress={() => Linking.openURL(covidLocalURL)} text="Find Local Statistics" />
        
      </View>

    </View>
    </BackgroundImage>
  );
}

export default RiskResources;