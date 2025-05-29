import React, { useEffect, useState } from 'react';
import { View, Text, BackHandler } from 'react-native';
import styles from '../styles/Home.styles';
import ExitModal from '../components/ExitModal';

const Home = () => {
  const [showExit, setShowExit] = useState(false);

  useEffect(() => {
  const backAction = () => {
    setShowExit(true);
    return true;
  };

  const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

  return () => backHandler.remove();
}, []);

  const handleExit = () => {
    BackHandler.exitApp();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home Screen</Text>
      <Text style={styles.subtitle}>This is where your game cheat magic will happen!</Text>

      <ExitModal
        visible={showExit}
        onCancel={() => setShowExit(false)}
        onExit={handleExit}
      />
    </View>
  );
};

export default Home;
