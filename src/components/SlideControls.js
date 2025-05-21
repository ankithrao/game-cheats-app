import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/SlideControls.styles';

const SlideControls = ({ currentIndex, totalSlides, onNext, onBack, onSkip }) => {
  return (
    <>
      {/* Skip button (text) */}
      {currentIndex < totalSlides - 1 && (
        <TouchableOpacity style={styles.skipButton} onPress={onSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}

      <View style={styles.bottomButtonsContainer}>
        {/* Back Icon */}
        {currentIndex > 0 && (
          <TouchableOpacity style={styles.iconButton} onPress={onBack}>
            <Icon name="arrow-back-circle" size={40} color="#00FFAA" />
          </TouchableOpacity>
        )}

        {/* Next/Start Icon */}
        <TouchableOpacity style={styles.iconButton} onPress={onNext}>
          <Icon
            name={currentIndex === totalSlides - 1 ? 'checkmark-circle' : 'arrow-forward-circle'}
            size={40}
            color="#00FFAA"
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SlideControls;