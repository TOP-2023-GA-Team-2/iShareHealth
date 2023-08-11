import { useMemo, useState } from 'react';
import { Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import RadioBtns from '../../components/RadioBtns/RadioBtns';
import MainBtn from '../../components/MainBtn/MainBtn';

const ManualResultEntry: React.FC = (navigation) => {

    
    
    //kit state
    const [kit, setKit] = useState('')
    
    
    //result state
    const [result, setResult] = useState('')
    
    // temporary data til backend connected
    const kits = [
        {
            label: 'Binax',
            value: 'BinaxNOW COVID-19 Ag Card Home Test'
        },
        {
            label: 'FlowFlex',
            value: 'Flowflex COVID-19 Antigen Home Test'
        },
        {
            label: 'iHealthLabs',
            value: 'iHealth COVID-19 Antigen Rapid Test'
        } 
    ]

    const testResults = [

    {
        id: '1',
        label: 'Positive',
        value: 'Positive'
    },
    {
        id: '2',
        label: 'Negative',
        value: 'Negative'
    },
    {
        id: '3',
        label: 'Invalid Result',
        value: 'Invalid Result'
    }
];
    

//look back for TS example

  return (
    <View className='flex-1 justify-center items-center'>
      <Text >Enter Your Test Result</Text>
      <Text >Step 1: Select Test Kit</Text>

      <DropDownMenu
        title='Select Test Kit Model:'
        options={kits}
        selectedValue={kit}
        onValueChange={(value) => setKit(value)}
        />
      <RadioBtns
        title='Step 2: Select Your Test Result'
        radioButtons={testResults}
        onValueChange={(value) => setResult(value)}
        />

      <MainBtn text="Submit my test result" onPress={() => navigation.navigate('Landing')} />

    </View>
  );
}

export default ManualResultEntry;