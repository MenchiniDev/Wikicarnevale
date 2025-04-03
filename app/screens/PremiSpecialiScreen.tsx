import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PremiSpecialiScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Qui i premi speciali</Text>
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

export default PremiSpecialiScreen;