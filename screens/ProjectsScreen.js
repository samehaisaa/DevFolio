import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const projects = [
  { id: '1', title: 'Application Mobile', description: 'Développement d\'une app React Native' },
  { id: '2', title: 'Site E-commerce', description: 'Plateforme avec système de paiement' },
  { id: '3', title: 'API REST', description: 'Développement backend en Node.js' },
];

export default function ProjectsScreen({ navigation }) {
  return (
    <FlatList
      data={projects}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('ProjectDetail', { project: item })}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2E86C1',
  },
  description: {
    color: '#666',
    marginTop: 5,
  },
});