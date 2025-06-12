// src/components/PlatformCards.js
import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Image,
} from "react-native";
import styles from "../styles/PlatformCards.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const platforms = [
  {
    name: "PS4",
    image: require("../../assets/ps4Fire.png"),
    shadow: styles.ps4Shadow,
  },
  {
    name: "PS5",
    image: require("../../assets/ps5Snow.png"),
    shadow: styles.ps5Shadow,
  },
  {
    name: "PC",
    image: require("../../assets/pcRain.png"),
    shadow: styles.pcShadow,
  },
];

const PlatformCards = ({ onSelect, selectedPlatforms = [] }) => {
  const animationValues = useRef(
    platforms.map(() => new Animated.Value(100)) // start from 100px down
  ).current;

  useEffect(() => {
    Animated.stagger(
      150,
      animationValues.map((val) =>
        Animated.timing(val, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        })
      )
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {platforms.map((platform, index) => {
        const scale = new Animated.Value(1);

        const isSelected = selectedPlatforms.includes(platform.name);

        const onPressIn = () => {
          Animated.spring(scale, {
            toValue: 1.07,
            useNativeDriver: true,
          }).start();
        };

        const onPressOut = () => {
          Animated.spring(scale, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true,
          }).start();
        };

        return (
          <TouchableWithoutFeedback
            key={platform.name}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={() => onSelect(platform.name)}
          >
            <Animated.View
              style={[
                styles.card,
                platform.shadow,
                isSelected && styles.selected,
                {
                  transform: [
                    { translateY: animationValues[index] },
                    { scale },
                  ],
                  opacity: animationValues[index].interpolate({
                    inputRange: [0, 100],
                    outputRange: [1, 0],
                    extrapolate: "clamp",
                  }),
                },
              ]}
            >
              <View style={styles.consoleImageContainer}>
                <Image
                  source={platform.image}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.label}>{platform.name}</Text>
              {isSelected && (
                <View style={styles.selectedIconContainer}>
                  <MaterialCommunityIcons
                    name="controller-classic"
                    size={16}
                    color="#00FFAA"
                  />
                </View>
              )}
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default PlatformCards;
