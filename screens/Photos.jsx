import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Allcolors from '../Composant/Allcolors';
import { Rubik_400Regular } from '@expo-google-fonts/rubik';

export default function ScreenPhotos({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Contenu de mon écran Photo</Text>
      <Button
        title="Portfolio"
        onPress={() => navigation.replace('Portfolio')
        }></Button>
      <Button
        title="Home"
        onPress={() => navigation.goBack()
        }></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Allcolors.vert
  },
  txt: {
    fontFamily: "Rubik_400Regular"
  }
})