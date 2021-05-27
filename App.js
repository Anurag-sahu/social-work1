import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import PollutionScreen from './screens/PollutionScreen';
import SollutionScreen from './screens/SollutionScreen'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  MenuScreen: MenuScreen,
  PollutionScreen:PollutionScreen,
  SollutionScreen:SollutionScreen,
});

const AppContainer = createAppContainer(AppNavigator);
