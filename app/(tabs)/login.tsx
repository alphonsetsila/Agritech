import { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const theme = useTheme();

  const handleLogin = () => {
    console.log('Login attempt:', { username, password });
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text variant="headlineMedium" style={[styles.title, { color: theme.colors.primary }]}>
          Connexion
        </Text>

        <TextInput
          label="Nom d'utilisateur"
          mode="outlined"
          left={<TextInput.Icon icon="account" />}
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          autoCapitalize="none"
        />

        <TextInput
          label="Mot de passe"
          mode="outlined"
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon 
              icon={secureTextEntry ? "eye-off" : "eye"} 
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            />
          }
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />

        <Button 
          mode="contained" 
          onPress={handleLogin}
          style={styles.loginButton}
          labelStyle={styles.loginButtonText}
          icon="login"
        >
          Se connecter
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'white',
  },
  loginButton: {
    marginTop: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});