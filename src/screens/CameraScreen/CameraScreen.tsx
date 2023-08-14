import { View, Text } from "react-native";
import MainBtn from '../../components/MainBtn/MainBtn';

const CameraScreen = () => {
    return (
        <View>
            <MainBtn text="Take Photo of Test Results" />
            <MainBtn text="Upload Test Results" />
        </View>
    );
}

export default CameraScreen;