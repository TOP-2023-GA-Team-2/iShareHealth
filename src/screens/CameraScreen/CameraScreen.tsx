import React from 'react';
import { View, Text, Button, Linking } from "react-native";
import MainBtn from '../../components/MainBtn/MainBtn';


const CameraScreen = () => {

    return (
        <View>
            <MainBtn text="Take Photo of Test Results" />
            <MainBtn text="Upload Photo" onPress={() => Linking.openURL('http://localhost:8502')} />
        </View>
    );
}

export default CameraScreen;