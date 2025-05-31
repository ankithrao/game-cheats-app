// src/styles/AppInfoPopup.styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 40,
    width: 250,
    backgroundColor: '#222',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00FFAA',
    marginBottom: 5,
  },
  version: {
    fontSize: 12,
    fontWeight: '600',
    color: '#aaa',
    marginBottom: 10,
  },
  text: {
    fontSize: 13,
    color: '#ddd',
    marginBottom: 5,
  },
});
