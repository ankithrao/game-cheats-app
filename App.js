import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from './src/redux/slices/testSlice';

const Home = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.test.message);
  const loading = useSelector((state) => state.test.loading);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Fetch Message" onPress={() => dispatch(fetchMessage())} />
      {loading ? <Text>Loading...</Text> : <Text>{message}</Text>}
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
