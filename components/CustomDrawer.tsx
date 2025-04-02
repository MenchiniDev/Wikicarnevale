import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#1a1a1a' }}
      >
        {/* Logo e Titolo */}
        <View style={styles.logoContainer}>
          {/* Assicurati di avere un'immagine in assets o commenta questa parte */}
          <Image
            source={require('./../assets/images/logo.jpg')}
            style={styles.logo}
          />
          <Text style={styles.logoText}>WikiCarnevaleViareggio</Text>
        </View>

        {/* Barra di Ricerca */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Cerca nel sito..."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        {/* Lista delle voci del drawer */}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  logoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
