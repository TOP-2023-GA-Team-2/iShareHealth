// ReusableBackground.tsx
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';


const backgroundImage = require('../../assets/images/backgroundImage.png')


interface ReusableBackgroundProps {
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    // Other styling for the background
  },
});

const ReusableBackground: React.FC<ReusableBackgroundProps> = ({ children }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      {children}
    </ImageBackground>
  );
};

export default ReusableBackground;
