import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import React from 'react';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qui ci vanno le cose da app</Text>
      <ul style={styles.ul}>
        <li>CV con fotocamera</li>
        <li>Folder per i biglietti del carnevale</li>
        <li>WikiClassifiche</li>
        <li>FantaCarnevale</li>
      </ul>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  ul: {
    fontFamily: 'sans-serif',
    padding: 10,
    margin: 10,
  },
});
