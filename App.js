import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper'; // <-- added for styled buttons
import store from './src/redux/store';

import IntroSlides from './src/screens/IntroSlides';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Intro" component={IntroSlides} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
