import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CostruzioniScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Costruzioni Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CostruzioniScreen;