import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#00FFAA',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    elevation: 3,
  },
  skipText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomButtonsContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  iconButton: {
    padding: 5,
  },
});