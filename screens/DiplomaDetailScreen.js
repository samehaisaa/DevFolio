import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Define prop types
interface DiplomaDetailProps {
  route: {
    params: {
      diploma: {
        title: string;
        year: string;
        details: string;
        institution?: string;
      }
    }
  }
}

const DiplomaDetailScreen: React.FC<DiplomaDetailProps> = ({ route }) => {
  const { diploma } = route.params;
  const navigation = useNavigation();

  if (!diploma) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorText}>Diploma details not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>{diploma.title}</Text>
          
          {diploma.institution && (
            <Text style={styles.institution}>{diploma.institution}</Text>
          )}
          
          <Text style={styles.year}>{diploma.year}</Text>
          <Text style={styles.details}>{diploma.details}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    color: '#2E86C1',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2E86C1',
  },
  institution: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  year: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  details: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#ff0000',
    fontSize: 16,
  },
});

export default DiplomaDetailScreen;