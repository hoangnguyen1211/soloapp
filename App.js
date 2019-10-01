import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import MainNavigator from './src/navigations/MainNavigator';
import configureStore from './src/redux/store';
import { Provider } from 'react-redux';

const store = configureStore();

const AppContainer = createAppContainer(MainNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.containerStyle}>
        <AppContainer />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  }
});

export default App;
