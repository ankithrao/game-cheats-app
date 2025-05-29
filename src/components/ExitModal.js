import React from 'react';
import { View, Text, Modal, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/ExitModal.styles';
import { Image as ExpoImage } from "expo-image";

const ExitModal = ({ visible, onCancel, onExit }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <ExpoImage
            source={require('../../assets/closing.gif')} // Use your own image or gif here
            style={styles.image}
          />
          <Text style={styles.text}>
            Don't quit now... real gamers cheat responsibly! 💀🎮
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exitBtn} onPress={onExit}>
              <Text style={styles.exitText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ExitModal;
