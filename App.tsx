/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import { View, Text } from 'nativewind'
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  // StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  // Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Landing from './src/screens/Landing/Landing';
import Login from './src/screens/Login/Login';
import Confirmation from './src/screens/Confirmation/Confirmation';
// import CameraScreen from './src/screens/CameraScreen/CameraScreen';
import ManualResultEntry from './src/screens/ManualResultEntry/ManualResultEntry';



type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    // <View style={styles.sectionContainer}>
    <View>
      {/* <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text> */}
      <Text>{title}</Text>
      {/* <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text> */}
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='Log In' component={Login} />
        <Stack.Screen name='Confirmation' component={Confirmation} />
        {/* <Stack.Screen name='CameraScreen' component={CameraScreen} /> */}
        <Stack.Screen name='ManualResultEntry' component={ManualResultEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// ! Not in use. We can only have Stack.Screen inside nvigator:

// <SafeAreaView>
// <StatusBar
//   barStyle={isDarkMode ? 'light-content' : 'dark-content'}

// />
// <ScrollView
//   contentInsetAdjustmentBehavior="automatic"
// >
//   <Header />
//   <Landing />
//   <View>
//     <Section title="Step One">
//       Edit <Text>App.tsx</Text> to change this
//       screen and then come back to see your edits.
//     </Section>
//     <Section title="See Your Changes">
//       <ReloadInstructions />
//     </Section>
//     <Section title="Debug">
//       <DebugInstructions />
//     </Section>
//     <Section title="Learn More">
//       <Text>Hello world</Text>
//       <Text>Read the docs to discover what to do next:</Text>
//     </Section>
//     <LearnMoreLinks />
//   </View>
// </ScrollView>
// </SafeAreaView>

export default App;
