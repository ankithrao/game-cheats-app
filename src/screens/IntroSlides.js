import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Image as ExpoImage } from "expo-image";
import Swiper from "react-native-swiper";
import { slides } from "../constants/sliderConstants";
import SlideControls from "../components/SlideControls";
import styles from "../styles/IntroSlides.styles";

const IntroSlides = ({ navigation }) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = () => {
    if (currentIndex === slides.length - 1) {
      navigation.replace("Home");
    } else {
      swiperRef.current.scrollBy(1);
    }
  };

  const onBack = () => {
    if (currentIndex > 0) {
      swiperRef.current.scrollBy(-1);
    }
  };

  const onSkip = () => {
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={true}
        dotColor="#555"
        activeDotColor="#00FFAA"
        paginationStyle={{ bottom: 50 }}
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {slides.map((slide, index) => (
          <View style={styles.slide} key={index}>
            <ExpoImage
              source={slide.gif}
              style={styles.gif}
              contentFit="contain"
            />
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.subtitle}>{slide.subtitle}</Text>
          </View>
        ))}
      </Swiper>

      {/* Slide controls */}
      <SlideControls
        currentIndex={currentIndex}
        totalSlides={slides.length}
        onNext={onNext}
        onBack={onBack}
        onSkip={onSkip}
      />
    </View>
  );
};

export default IntroSlides;
