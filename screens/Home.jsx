import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, Pressable } from 'react-native';
import Allcolors from '../Composant/Allcolors';
import { useFonts } from 'expo-font';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { DATA } from '../data/userData';
import ScreenPortfolio from './Portfolio'


export default function ScreenHome({ navigation }) {

    return (

        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) =>
                    <View >
                        <Pressable style={({ pressed }) => [styles.pres, { backgroundColor: pressed ? Allcolors.bordeau : Allcolors.transparent }]} onPress={() => navigation.navigate('Portfolio', { user: item })}>
                            <Text style={styles.titre}>{item.name}</Text>
                            <Image source={{ uri: item.img }}
                                style={{ width: 200, height: 200 }}>
                            </Image>
                            <View style={styles.info}>
                                <Text>{item.country}</Text>
                                <Text>{item.totalImg}</Text>
                            </View>
                        </Pressable>
                    </View>
                }
                keyExtractor={item => item.id}
                style={styles.tab}
            />
        </View >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: Allcolors.bleu
    },
    txt: {
        fontFamily: "Lato_400Regular"
    },
    tab: {
        display: "flex",
    },
    titre: {
        textAlign: "center",
        alignItems: "center",
        // fontSize: "40"
    },
    info: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    pres: {
        justifyContent: 'space-between',
    }
});