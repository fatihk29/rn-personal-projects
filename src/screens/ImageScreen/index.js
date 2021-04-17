import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageDetail from '../../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" />
      <ImageDetail title="" />
      <ImageDetail title="" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
