import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Allcolors from '../Composant/Allcolors';
import { Rubik_400Regular } from '@expo-google-fonts/rubik';

export default function ScreenPortfolio({ navigation, route }) {

  const item = route.params.user
  navigation.setOptions({headerTitle: `Portfolio de ${item.name}`, headerStyle: {backgroundColor:item.favColor}})
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{item.name}</Text>
      <Text style={styles.txt}>{item.country}</Text>
      {/* <Button
                title="Photo"
                onPress={() =>navigation.replace('Photo')}
        ></Button> */}
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