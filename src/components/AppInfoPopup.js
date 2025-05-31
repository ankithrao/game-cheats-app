// src/components/AppInfoPopup.js
import React, { useEffect, useRef } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';
import styles from '../styles/AppInfoPopup.styles';

const AppInfoPopup = ({ visible }) => {
  const slideAnim = useRef(new Animated.Value(100)).current; // start off-screen right

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : 100, // slide in/out horizontally
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateX: slideAnim }],
        },
      ]}
    >
      <Text style={styles.title}>🎮 Game Cheats with AI</Text>
      <Text style={styles.version}>Version: v0.3.1</Text>
      <Text style={styles.text}>
        Welcome to the ultimate gaming cheats app! Powered by AI, designed for gamers like you.
      </Text>
      <Text style={styles.text}>Developed by Ankith Ranuva. Happy gaming! 🚀</Text>
    </Animated.View>
  );
};

export default AppInfoPopup;
