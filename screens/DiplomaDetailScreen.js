import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DiplomaDetailScreen = ({ route }) => {
  const { diploma } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{diploma.title}</Text>
      <Text style={styles.detail}>Année: {diploma.year}</Text>
      <Text style={styles.detail}>Détails: {diploma.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2E86C1',
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
    color: '#566573',
  },
});

export default DiplomaDetailScreen;