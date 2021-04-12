import React from 'react';
import {Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  console.log('6');
  return <Text style={styles.text}>HomeScreen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
