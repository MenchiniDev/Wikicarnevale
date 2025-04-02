import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Contenuto dell'index di WikiCarnevale */}
        <View style={styles.header}>
          <Text style={styles.logo}>WikiCarnevaleViareggio</Text>
          <Text style={styles.subtitle}>Tutto il Carnevale in un click</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1085</Text>
            <Text style={styles.statLabel}>Canzoni</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1400</Text>
            <Text style={styles.statLabel}>Protagonisti</Text>
          </View>
          {/* Altri box statistici */}
        </View>
        
        {/* Altre sezioni della pagina */}
        <View style={styles.editionContainer}>
          <Text style={styles.editionTitle}>L'edizione 2025</Text>
          <Text style={styles.sectionTitle}>Vincitori</Text>
          {/* Elenco vincitori */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 4,
  },
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
});
