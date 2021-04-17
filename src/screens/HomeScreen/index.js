import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Components')}>
        <Text style={styles.text}>Go to Components Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Lists')}>
        <Text style={styles.text}>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Images')}>
        <Text style={styles.text}>Go to Image Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
