import {Picker} from '@react-native-picker/picker'
import {View, Text} from 'react-native'


interface PickerOption {
    label: string,
    value: string;
}
    

interface PickerProps {
    title: string;
    options: PickerOption[];
    onValueChange: (value: string) => void;
    selectedValue: string;
}

const DropDownMenu: React.FC<PickerProps> = ({
    title,
    options,
    onValueChange,
    selectedValue,

}) => {

    return (
        <View>
            <Text>{title}</Text>
            <Picker
               selectedValue={selectedValue}
               onValueChange={onValueChange} 
            >
                <Picker.Item label="Select" value=""/>
                {options.map((option) => (
                    <Picker.Item
                        key={option.value}
                        label={option.label}
                        value={option.value}
                    />
                ))}
            </Picker>
        </View>
        )
    }

export default DropDownMenu