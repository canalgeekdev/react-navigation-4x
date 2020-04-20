import React from 'react';

import RootStack from './src/RootStack';
import { View, Text } from 'react-native-animatable';

export default class App extends React.Component{
  render() {
    return(
      // <View>
      //   <Text>CanalGeekDev</Text>
      // </View>
      <RootStack />
    )
  }
}
