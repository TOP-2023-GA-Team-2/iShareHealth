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
            

                <View className='h-3/4 rounded drop-shadow-2xl bg-emerald-300 justify-center place-content-between'>
                    <View className=''>
                        <TouchableOpacity onPress={onClose} >
                            <Text className='font-bold text-right text-xl m-2'>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View className=' items-center'>

                    {children}
                    </View>
                </View>
        
        </Modal>
    );
};

export default ModalComponent