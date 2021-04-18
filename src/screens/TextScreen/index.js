import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

const TextScreeen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="type your name"
        onChangeText={newValue => {
          setName(newValue);
        }}
        value={name}
      />
      {name.length > 2 ? (
        <Text style={styles.text}>Your name is {name}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    marginLeft: 15,
    fontSize: 22,
  },
});

export default TextScreeen;
