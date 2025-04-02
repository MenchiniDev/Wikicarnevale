import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tutto il carnevale che c'è</Text>
      <Link href="/about" style={styles.Button}>In un click</Link>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Link href="/settings" style={styles.Button}>Settings</Link>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
  Button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e78b7',
    textDecorationLine: 'underline',
  },
});
