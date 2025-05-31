import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  BackHandler,
  TextInput,
  Keyboard,
  Animated,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/Home.styles";
import ExitModal from "../components/ExitModal";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";
import TypewriterText from "../components/TypewriterText";
import AppInfoPopup from "../components/AppInfoPopup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = () => {
  const [showExit, setShowExit] = useState(false);
  const [search, setSearch] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const offsetY = useRef(new Animated.Value(0)).current;
  const rotation = useRef(new Animated.Value(0)).current;

  const [fontsLoaded] = useFonts({ PressStart2P_400Regular });

  useEffect(() => {
    const backAction = () => {
      setShowExit(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        Animated.timing(offsetY, {
          toValue: -100,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        Animated.timing(offsetY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    );

    return () => {
      backHandler.remove();
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleExit = () => {
    BackHandler.exitApp();
  };

  const toggleInfo = () => {
    Animated.timing(rotation, {
      toValue: showInfo ? 0 : 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    setShowInfo(!showInfo);
  };

  if (!fontsLoaded) return null;

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <View style={styles.typewriterWrapper}>
        <TypewriterText
          text="🎮 Yo buddy! Type a game name and pick your device — let's hack the leaderboard! 😎"
          textStyle={styles.typewriter}
          speed={60}
        />
      </View>

      <Animated.View
        style={[
          styles.searchContainer,
          { transform: [{ translateY: offsetY }] },
        ]}
      >
        <Ionicons
          name="search"
          size={20}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search for a game..."
          placeholderTextColor="#888"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </Animated.View>

      <ExitModal
        visible={showExit}
        onCancel={() => setShowExit(false)}
        onExit={handleExit}
      />

      {/* User icon and popup */}
      <View style={styles.userIconContainer}>
        <TouchableOpacity onPress={toggleInfo}>
          <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
            <MaterialCommunityIcons
              name="gamepad-variant"
              size={40}
              color="#fff"
              style={styles.userIcon}
            />
          </Animated.View>
        </TouchableOpacity>
        <AppInfoPopup visible={showInfo} />
      </View>
    </View>
  );
};

export default Home;
