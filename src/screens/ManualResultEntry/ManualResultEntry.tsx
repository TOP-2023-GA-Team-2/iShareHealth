import { useMemo, useState } from 'react';
import { Text, View, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { RadioGroup } from 'react-native-radio-buttons-group';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainBtn from '../../components/MainBtn/MainBtn';

const ManualResultEntry: React.FC = () => {

    const [kit, setKit] = useState('')

    const [result, setResult] = useState('')

// temporary til backend connected
    const kits = ['Binax', 'FlowFlex', 'iHealthLabs']

    const results = ['Positive', 'Negative', 'Invalid Result']

    const radioButtons = useMemo(() => ([
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
        },
    ]), []);

//look back for TS example

  return (
    <View className='flex-1 justify-center items-center'>
      <Text >Enter Your Test Result</Text>
      <Text >Step 1: Select Test Kit</Text>
      <Picker
        selectedValue={kit}
        onValueChange={(itemValue) => setKit(itemValue)}
      >
        <Picker.Item label="Select a kit" value="" />
        {kits.map((kit) => (
          <Picker.Item key={kit} label={kit} value={kit} />
        ))}
      </Picker>
      <Text>Step 2: Select Your Test Result</Text>
      {results.map((result) => (
        <View key={result}>
          <RadioGroup
            value={result}
            selected={selectedResult === result}
            onPress={() => setSelectedResult(result)}
          />
          <Text>{result}</Text>
      <MainBtn onPress={() => navigation.navigate('CameraScreen')} text="Scan my test" />

    </View>
  );
}

export default ManualResultEntry;