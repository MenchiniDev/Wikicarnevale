import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// Import delle schermate, inclusa l'index (HomeScreen)
import HomeScreen from './screens/HomeScreen';
import EdizioniScreen from './screens/EdizioniScreen';
import CostruzioniScreen from './screens/CostruzioniScreen';
import CanzoniScreen from './screens/CanzoniScreen';
// import PremiSpecialiScreen from './screens/PremiSpecialiScreen';
// import TeatroScreen from './screens/TeatroScreen';
// import PersoneScreen from './screens/PersoneScreen';
// import CittaScreen from './screens/CittaScreen';
// import LibriScreen from './screens/LibriScreen';
// import GiochiScreen from './screens/GiochiScreen';
// import RingraziamentiScreen from './screens/RingraziamentiScreen';
// import IlProgettoScreen from './screens/IlProgettoScreen';

// Componente custom del drawer
import CustomDrawer from '../components/CustomDrawer';

export type DrawerParamList = {
  Home: undefined;
  Edizioni: undefined;
  Costruzioni: undefined;
  Canzoni: undefined;
  'Premi Speciali': undefined;
  Teatro: undefined;
  Persone: undefined;
  Città: undefined;
  Libri: undefined;
  Giochi: undefined;
  Ringraziamenti: undefined;
  'Il Progetto': undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      id={undefined}
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#1a1a1a' },
        headerTintColor: '#fff',
        // Configurazione del drawer per avere effetto overlay
        drawerType: 'front', // "front" fa sì che il menu si apra in sovrapposizione
        overlayColor: 'rgba(0, 0, 0, 0.5)', // colore di overlay semitrasparente
        drawerStyle: {
          backgroundColor: '#1a1a1a',
          width: 250,
        },
        drawerActiveTintColor: '#ff414d',
        drawerInactiveTintColor: '#fff',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      {/* Aggiungi qui le altre schermate */}
      <Drawer.Screen
        name="Edizioni"
        component={EdizioniScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Costruzioni"
        component={CostruzioniScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="build-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Canzoni"
        component={CanzoniScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="musical-notes-outline" size={size} color={color} />
          ),
        }}
      />
      {/* ... inserisci le altre schermate come necessario ... */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
