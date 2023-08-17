import { Text, View, Button, Linking} from 'react-native';
import { useCallback } from 'react';
import MainBtn from '../../components/MainBtn/MainBtn';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import GetStartedBtn from '../../components/GetStartedBtn/GetStartedBtn'

const covidNationalURL = 'https://public.tableau.com/app/profile/jacqueline.petersen/viz/GAxTOPVisuals/SocialVulnerabilityIndex'

const covidLocalURL = 'https://ihealthshare-ehhwhvzvghe6f5hiru7e8t.streamlit.app/'

const RiskResources = ({navigation}) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text >iShareHealth</Text>
      <Text className='mb-5'>How can we help you today?</Text>

      <View className='flex-row flex-wrap justify-around items-center content-around gap-0'>
       
        <MainBtn onPress={() => Linking.openURL(covidNationalURL)} text="See national statistics" />
        <MainBtn onPress={() => Linking.openURL(covidLocalURL)} text="Find Local Statistics by Zip Code" />
        
      </View>

    </View>
  );
}

export default RiskResources;