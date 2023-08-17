import { ImageBackground, SafeAreaView, Text, View } from 'react-native';

import image from './backgroundImage.png'




const BackgroundImage: React.FC = ({
    
}) => {
    const image = {
        uri:
          'src/assets/backgroundImage.png',
      };
    
      return (
        <SafeAreaView>
          <ImageBackground source={image} resizeMode="cover" style={{ height: 400 }}>
            <View
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.4)',
              }}
            >
            </View>
          </ImageBackground>
        </SafeAreaView>
      );
}

export default BackgroundImage