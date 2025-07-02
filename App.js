import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import store from './src/redux/store';
import IntroSlides from './src/screens/IntroSlides';
import Home from './src/screens/Home';
import CheatResults from './src/screens/CheatResults';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const checkFirstTime = async () => {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      if (hasLaunched === null) {
        await AsyncStorage.setItem('hasLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    };

    checkFirstTime();
  }, []);

  if (isFirstLaunch === null) return null; // You can replace with splash screen if needed

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isFirstLaunch && (
            <Stack.Screen name="Intro" component={IntroSlides} />
          )}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CheatResults" component={CheatResults} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}