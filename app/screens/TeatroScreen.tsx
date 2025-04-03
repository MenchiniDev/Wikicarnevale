import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TeatroScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Qui ci vanno i teatri</Text>
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

export default TeatroScreen;