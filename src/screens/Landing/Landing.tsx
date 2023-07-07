import { Text, View } from 'react-native';

import MainBtn from '../../../components/MainBtn/MainBtn';

const Landing = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text>Welcome to iShareHealth! Your</Text>
      <Text>I want to...</Text>

      <MainBtn text="Enter my test results" />
      <MainBtn text="Sign in/up" />

    </View>
  );
}

export default Landing;