import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { View, Text } from 'native-base';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  text: {
    color: 'white'
  }
});

const BrowseScreen = () => (
  <View style={styles.root}>
    <Text style={styles.text}>Browse Screen</Text>
  </View>
);

export default BrowseScreen;
