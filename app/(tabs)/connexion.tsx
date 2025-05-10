import { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';

export default function EcoLoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleLogin = () => {
    console.log('Tentative de connexion avec:', { username, password });
    // Ici vous ajouterez votre logique de connexion
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Éco-Connexion</Text>
        <Text style={styles.subtitle}>Rejoignez la communauté verte</Text>
        <TextInput
          label="Nom d'utilisateur"
          mode="outlined"
          left={<TextInput.Icon icon="account" color="#4CAF50" />}
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          theme={{ colors: { primary: '#4CAF50' } }}
        />
        <TextInput
          label="Mot de passe"
          mode="outlined"
          secureTextEntry={secureTextEntry}
          left={<TextInput.Icon icon="lock" color="#4CAF50" />}
          right={
            <TextInput.Icon 
              icon={secureTextEntry ? "eye-off" : "eye"} 
              color="#4CAF50"
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            />
          }
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          theme={{ colors: { primary: '#4CAF50' } }}
        />

        {/* Bouton de connexion */}
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          labelStyle={styles.buttonText}
          icon="leaf"
          theme={{ colors: { primary: '#4CAF50' } }}
        >
          Se connecter
        </Button>

        {/* Lien d'inscription */}
        <Text style={styles.registerText}>
          Nouveau membre ? <Text style={styles.registerLink}>Créer un compte</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FDF7',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#689F38',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  button: {
    marginTop: 15,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    shadowColor: '#2E7D32',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#757575',
  },
  registerLink: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});