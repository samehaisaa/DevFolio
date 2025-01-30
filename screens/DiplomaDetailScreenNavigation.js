import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    
      <Image
        source={require('../assets/sameh_cv.png')} // Chemin corrigé

        style={styles.profileImage}
      />
      <Text style={styles.name}>Sameh Aissa</Text>
      <View style={styles.infoContainer}>
        <InfoItem label="Email" value="sameh.aissa@ensi-uma.tn" />
        <InfoItem label="Adresse" value="8011 Rue Medina, Nabeul" />
        <InfoItem label="Téléphone" value="+216 93 150 222" />
      </View>
    </ScrollView>
  );
};

const InfoItem = ({ label, value }) => (
  <View style={styles.infoItem}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#2E86C1',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2E86C1',
    textAlign: 'center',
  },
  infoContainer: {
    width: '90%',
    backgroundColor: '#F8F9F9',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoItem: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontWeight: '600',
    color: '#34495E',
    width: '30%',
  },
  value: {
    fontSize: 16,
    color: '#566573',
    width: '65%',
  },
});

export default HomeScreen;