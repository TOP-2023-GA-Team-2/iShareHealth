import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from 'react-native-modal';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({isVisible, onClose }) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
            <View className="bg-green-400 w-90 h-90">
                <Text>This is a modal</Text>
                <TouchableOpacity onPress={onClose}>
                    <Text>Close Modal</Text>
                </TouchableOpacity>
                
            </View>
        </Modal>
    );
};

export default ModalComponent