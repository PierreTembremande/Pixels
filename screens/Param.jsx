import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Allcolors from '../Composant/Allcolors';
import { Rubik_400Regular } from '@expo-google-fonts/rubik';

export default function ScreenParam({ navigation}) {

  const item = route.params.user

  return (
    <View style={styles.container}>
      <Button
        title="Home"
        onPress={() => navigation.goBack()}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Allcolors.orange
  },
  txt: {
    fontFamily: "Rubik_400Regular"
  }
});