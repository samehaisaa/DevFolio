import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const diplomas = [
  { id: '1', title: 'Baccalauréat Mathématiques', year: '2019', details: 'Mention  Bien' },
  { id: '2', title: 'Classe Préparatoire', year: '2019-2021', details: 'MP' },
  { id: '3', title: 'Diplôme d\'Ingénieur', year: '2025', details: 'Spécialité Informatique' }
];

const DiplomasScreen = ({ navigation }) => {
  return (
    <FlatList
      data={diplomas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('DiplomaDetail', { diploma: item })}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#D0D3D4',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2E86C1',
  },
  year: {
    color: '#566573',
  },
});

export default DiplomasScreen;