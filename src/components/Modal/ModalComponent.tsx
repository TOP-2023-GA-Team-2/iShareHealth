import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from 'react-native-modal';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;

}

const ModalComponent: React.FC<ModalProps> = ({isVisible, onClose, onButtonPress, children }) => {
  

    return (
        <Modal isVisible={isVisible} >
            <View className="bg-green-400 w-90 h-90">
            <TouchableOpacity onPress={onClose} >
                <Text className='font-bold text-right text-xl m-2'>X</Text>
            </TouchableOpacity>
                {children}
            </View>
        </Modal>
    );
};

export default ModalComponent