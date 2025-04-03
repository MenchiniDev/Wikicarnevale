import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
  Animated,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Link } from 'expo-router';
import EdizioniScreen from '../screens/EdizioniScreen';


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const slideAnim = useRef(new Animated.Value(-250)).current;

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Bingo': require('../../assets/fonts/BINGO.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();


    Animated.timing(slideAnim, {
      toValue: menuOpen ? 0 : -250,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [menuOpen]);

  function toggleMenu() {
    setMenuOpen(prev => !prev);
  }

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync();
  }

  const colorAnim = useRef(new Animated.Value(0)).current;

// const startAnimation = () => { // possibile animazione per CarnevaleViareggio
//   Animated.timing(colorAnim, {
//     toValue: 1,
//     duration: 500,
//     useNativeDriver: false,
//   }).start();
// };

// const resetAnimation = () => {
//   Animated.timing(colorAnim, {
//     toValue: 0,
//     duration: 500,
//     useNativeDriver: false,
//   }).start();
// };

const textColor = colorAnim.interpolate({
  inputRange: [0, 1],
  outputRange: ['#fff', '#ff414d'], // Da bianco a rosso
});

  return (
    <SafeAreaView style={styles.container}>
      {/* Menu che scorre da sinistra */}
      <Animated.View style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}>
        <View style={styles.menuContainer}>
          <Link href={"../screens/EdizioniScreen"} style={styles.menuItem}>Edizioni</Link>
          <Link href={"../screens/CostruzioniScreen"} style={styles.menuItem}>Costruzioni</Link>
          <Link href={"../screens/CanzoniScreen"} style={styles.menuItem}>Canzoni</Link>
          <Link href={"../screens/PremiSpecialiScreen"} style={styles.menuItem}>Premi Speciali</Link>
          <Link href={"../screens/TeatroScreen"} style={styles.menuItem}>Teatro</Link>
          <Link href={"../screens/PersoneScreen"} style={styles.menuItem}>Persone</Link>
          <Link href={"../screens/CittaScreen"} style={styles.menuItem}>Città</Link>
          <Link href={"../screens/LibriScreen"} style={styles.menuItem}>Libri</Link>
          <Link href={"../screens/GiochiScreen"} style={styles.menuItem}>Giochi</Link>
          <Link href={"../screens/RingraziamentiScreen"} style={styles.menuItem}>Ringraziamenti</Link>
          <Link href={"../screens/ProgettoScreen"} style={styles.menuItem}>Il Progetto</Link>
        </View>
      </Animated.View>

      {/* Header con Hamburger, logo e titolo */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Image source={require('../../assets/images/logo.jpg')} style={styles.logoImage} />
            <View style={styles.textContainer}>
          <Text style={styles.logo}>
          <Text style={{ color: '#ff414d' }}>WikiCarnevaleViareggio</Text>
            {/* <Pressable onPressIn={startAnimation} onPressOut={resetAnimation}>
            <Animated.Text style={{ color: textColor, fontSize: 24, marginBottom: 0}}>CarnevaleViareggio</Animated.Text>
          </Pressable> */}
        </Text>
      <Text style={styles.subtitle}>Tutto il Carnevale di Viareggio in un click</Text>
    </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Sezione statistiche */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Ionicons name="musical-notes" size={24} color="#fff" />
            <Text style={styles.statNumber}>1085</Text>
            <Text style={styles.statLabel}>Canzoni</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="people" size={24} color="#fff" />
            <Text style={styles.statNumber}>1400</Text>
            <Text style={styles.statLabel}>Protagonisti</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="build" size={24} color="#fff" />
            <Text style={styles.statNumber}>3641</Text>
            <Text style={styles.statLabel}>Costruttori</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="book" size={24} color="#fff" />
            <Text style={styles.statNumber}>176</Text>
            <Text style={styles.statLabel}>Libri</Text>
          </View>
        </View>

        {/* Sezione link rapidi (foto/video) */}
        <View style={styles.quickLinksContainer}>
          <View style={styles.quickLinkBox}>
            <Text style={styles.quickLinkNumber}>1972</Text>
            <Text style={styles.quickLinkLabel}>Foto</Text>
          </View>
          <View style={styles.quickLinkBox}>
            <Text style={styles.quickLinkNumber}>1781</Text>
            <Text style={styles.quickLinkLabel}>Video</Text>
          </View>
        </View>

        {/* Sezione Edizione */}
        <View style={styles.editionContainer}>
          <Text style={styles.editionTitle}>L'edizione 2025</Text>
          <Text style={styles.sectionTitle}>Vincitori</Text>
          <Text style={styles.listItem}>
            Prima Categoria: Sic transit gloria mundi (C. Lombardi, L...)
          </Text>
          <Text style={styles.listItem}>Seconda Categoria: È Tardi È Tardi È Tardi (Matteo Raciti)</Text>
          <Text style={styles.listItem}>Maschere in Gruppo: Sogna Ragazzo Sogna(S. Bianchi)</Text>
          <Text style={styles.listItem}>Maschere isolate: Diocantante (S. Ciulli)</Text>
        </View>

        {/* Sezione Costruzioni in gara */}
        <View style={styles.constructionsContainer}>
          <Text style={styles.sectionTitle}>Costruzioni in gara</Text>
          <Text style={styles.listItem}>Prima Categoria</Text>
          <Text style={styles.listItem}>Seconda Categoria</Text>
          {/* Aggiungi altre voci secondo necessità */}
        </View>
      </ScrollView>
      <Pressable onPress={toggleMenu} style={styles.bottomMenuButton}>
        <Ionicons name="ellipsis-horizontal" size={24} color="#fff" />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollContainer: {
    padding: 16,
    paddingTop: 0,
  },
  /* Header */
  header: {
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    position: 'relative',
    zIndex: 2,
    backgroundColor: '#1a1a1a',
  },
  hamburgerContainer: {
    position: 'absolute',
    left: 16,
    top: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  logoImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 8,
  },
  textContainer: {
    justifyContent: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'BINGO',
    letterSpacing: 1
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 2
  },
  /* Side Menu */
  sideMenu: {
    position: 'absolute',
    top: 20,
    bottom: 0,
    width: 250,
    backgroundColor: '#333',
    zIndex: 1,
    paddingTop: 60, // per evitare la zona dell'header
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  menuItem: {
    fontSize: 18,
    color: '#fff',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  /* Stats */
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#333',
    marginHorizontal: 4,
    paddingVertical: 12,
    borderRadius: 8,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 6,
  },
  statLabel: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 2,
  },
  /* Quick Links (foto/video) */
  quickLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  quickLinkBox: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 8,
    width: '45%',
  },
  quickLinkNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  quickLinkLabel: {
    fontSize: 14,
    color: '#ccc',
  },
  /* Edizione 2025 */
  editionContainer: {
    marginBottom: 20,
  },
  editionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff414d',
    marginBottom: 6,
  },
  listItem: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 8,
    marginBottom: 4,
  },
  /* Costruzioni */
  constructionsContainer: {
    marginBottom: 20,
  },
  bottomMenuButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
});
