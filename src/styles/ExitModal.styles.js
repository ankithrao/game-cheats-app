import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '80%',
    backgroundColor: '#222',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  exitBtn: {
    flex: 1,
    backgroundColor: '#00FFAA',
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
  },
  cancelText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  exitText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
