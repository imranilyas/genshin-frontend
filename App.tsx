import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Reducer } from './src/redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation';

export type RootStore = ReturnType<typeof Reducer>

export default function App() {
  // holds state tree and applies thunk - allows the return of functions asynchronously
  // composeWithDevTools allows for stronger debugging tools if run in the web
  const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

  return (
    <Provider store = {store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <RootStack />
        {/*         
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View> 
        */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
