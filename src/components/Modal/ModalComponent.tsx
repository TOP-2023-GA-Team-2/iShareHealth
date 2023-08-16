import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from 'react-native-modal';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;

}

const ModalComponent: React.FC<ModalProps> = ({isVisible, onClose, children }) => {
  

    return (
        <Modal isVisible={isVisible} >
            

                <View className='modal h-3/4 rounded drop-shadow-2xl bg-emerald-200 flex-col'>
                    <View className='close-block '>
                        <TouchableOpacity onPress={onClose} className=' '>
                            <Text className='font-bold text-right text-xl m-2 '>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View className=' content-block flex-col items-stretch flex-grow flex-col justify-between items-center m-5'>

                    {children}
                    </View>
                </View>
        
        </Modal>
    );
};

export default ModalComponent