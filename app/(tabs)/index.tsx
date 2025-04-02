import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  Animated,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Valore iniziale del menu fuori schermo (menu width = 250)
  const slideAnim = useRef(new Animated.Value(-250)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menuOpen ? 0 : -250,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [menuOpen]);

  function toggleMenu() {
    setMenuOpen(prev => !prev);
  }

  function handlePress(event: GestureResponderEvent): void {
    // Logica placeholder per altri eventi di pressione
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Menu che scorre da sinistra */}
      <Animated.View style={[styles.sideMenu, { transform: [{ translateX: slideAnim }] }]}>
        <View style={styles.menuContainer}>
          <Text style={styles.menuItem}>Edizioni</Text>
          <Text style={styles.menuItem}>Costruzioni</Text>
          <Text style={styles.menuItem}>Canzoni</Text>
          <Text style={styles.menuItem}>Premi Speciali</Text>
          <Text style={styles.menuItem}>Teatro</Text>
          <Text style={styles.menuItem}>Persone</Text>
          <Text style={styles.menuItem}>Città</Text>
          <Text style={styles.menuItem}>Libri</Text>
          <Text style={styles.menuItem}>Giochi</Text>
          <br></br>
          <Text style={styles.menuItem}>Ringraziamenti</Text>
          <Text style={styles.menuItem}>Il Progetto</Text>
        </View>
      </Animated.View>

      {/* Header con Hamburger, logo e titolo */}
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={styles.hamburgerContainer}>
            <Ionicons name="menu" size={32} color="#fff" />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.titleContainer}>
          <Image
            source={require('../../assets/images/logo.jpg')}
            style={styles.logoImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.logo}>WikiCarnevaleViareggio</Text>
            <Text style={styles.subtitle}>
              Tutto il Carnevale di Viareggio in un click
            </Text>
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
          <Text style={styles.listItem}>Seconda Categoria: ...</Text>
          <Text style={styles.listItem}>Terza Categoria: ...</Text>
          <Text style={styles.listItem}>Maschere isolate: (S. Roggio)</Text>
          <Text style={styles.listItem}>Maschere in Gruppo: (S. Culla)</Text>
        </View>

        {/* Sezione Costruzioni in gara */}
        <View style={styles.constructionsContainer}>
          <Text style={styles.sectionTitle}>Costruzioni in gara</Text>
          <Text style={styles.listItem}>Prima Categoria</Text>
          <Text style={styles.listItem}>Seconda Categoria</Text>
          <Text style={styles.listItem}>Terza Categoria</Text>
          {/* Aggiungi altre voci secondo necessità */}
        </View>
      </ScrollView>
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
    top: 10,
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
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 2,
  },
  /* Side Menu */
  sideMenu: {
    position: 'absolute',
    top: 0,
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
});
