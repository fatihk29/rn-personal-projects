import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  console.log(navigation);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
      <Button
        onPress={() => {
          navigation.navigate('Components');
        }}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text style={styles.text}>Go to List Demo</Text>
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
