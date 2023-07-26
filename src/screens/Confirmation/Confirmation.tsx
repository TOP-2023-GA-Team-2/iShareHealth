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

    const messageHeading = "Thank you for your time!"

    const messageBody = "Maximize the benefits of your testing experience by creaeting an iHealthShare account. Gain access to a range of convenient features designed to streamline your test-taking process in the future."

    const handleCreateAccount = () => {
        navigation.navigate('Log In'); // Replace 'Log In' with the screen name you want to navigate to
        toggleModal(); // Close the modal after navigation
      };

    return (
        <View className='items-center'>
            <MainBtn onPress={() => navigation.navigate('Landing')} text="Home" />
            {/* unable to keep background screen unshaded and add drop shadow. react native modal shades behind it by default. */}
            <ModalComponent isVisible={isModalVisible} onClose={toggleModal} >
                <Text className='text-center font-bold text-xl m-2'>{messageHeading}</Text>
                <Text className='text-center m-10'>{messageBody}</Text>
                <MainBtn text="Create an Account" onPress={handleCreateAccount}/>
            </ModalComponent>
        </View>
    );
}

export default Confirmation;