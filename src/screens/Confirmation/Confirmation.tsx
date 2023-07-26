import { Text, View, Button } from 'react-native';
import {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainBtn from '../../components/MainBtn/MainBtn';

import ModalComponent from '../../components/Modal/ModalComponent';



const Confirmation = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(true)
    
    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }
    return (
        <View className=''>
            <ModalComponent isVisible={isModalVisible} onClose={toggleModal} />
        </View>
    );
}

export default Confirmation;