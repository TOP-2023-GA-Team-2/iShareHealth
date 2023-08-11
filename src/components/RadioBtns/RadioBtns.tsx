import { RadioButtonProps, RadioGroup } from 'react-native-radio-buttons-group';
import { useMemo, useState } from 'react';
import {View, Text} from 'react-native'


interface RadioProps {
    title: string;
    radioButtons: RadioButtonProps[];
    onValueChange: (value: string) => void;
}

const RadioBtns: React.FC<RadioProps> = ({
    title,
    radioButtons,
    onValueChange,
}) => {
    return (
        <View className=''>
            <Text className=''>{title}</Text>
            <RadioGroup radioButtons={radioButtons} onPress={onValueChange} />
        </View>
    )
}

export default RadioBtns