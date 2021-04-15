import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Bye There';
  return (
    <View>
      <Text style={styles.textStyle}>This is the Components Screen</Text>
      <Text>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
