import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const ContactScreen = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!email.includes('@') || message.length < 10) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs correctement');
      return;
    }
    // Logique d'envoi ici
    Alert.alert('Succès', 'Message envoyé!');
    setEmail('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      <Button
        title="Envoyer"
        onPress={handleSubmit}
        color="#2E86C1"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D0D3D4',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default ContactScreen;