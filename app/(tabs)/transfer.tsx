import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function TransferScreen() {
  const [points, setPoints] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Taux de conversion (ex: 1 point = 10 Ariary)
  const CONVERSION_RATE = 10;

  const handleTransfer = () => {
    if (!points || !phone) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    const pointsNumber = parseInt(points);
    if (isNaN(pointsNumber)) {
      Alert.alert('Erreur', 'Nombre de points invalide');
      return;
    }

    setIsLoading(true);
    
    // Simulation de transfert
    setTimeout(() => {
      const amount = pointsNumber * CONVERSION_RATE;
      Alert.alert(
        'Transfert réussi', 
        `Vous avez transféré ${pointsNumber} points\nMontant reçu: ${amount} Ariary`
      );
      setPoints('');
      setPhone('');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Convertir mes points en Ariary
      </ThemedText>

      <View style={styles.card}>
        <Text style={styles.rateText}>1 Point = {CONVERSION_RATE} Ariary</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre de points</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="500"
            value={points}
            onChangeText={setPoints}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Numéro mobile money</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="034 XX XXX XX"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <View style={styles.summary}>
          <Text style={styles.summaryText}>
            Vous recevrez: {points ? (parseInt(points) * CONVERSION_RATE) : 0} Ariary
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={handleTransfer}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? 'Traitement...' : 'Transférer'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.note}>
        <Text style={styles.noteText}>
          Le transfert prendra 24h maximum. Vérifiez bien votre numéro avant confirmation.
        </Text>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  rateText: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  summary: {
    marginVertical: 15,
    padding: 10,
    backgroundColor: '#e8f5e9',
    borderRadius: 8,
  },
  summaryText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  note: {
    padding: 10,
    backgroundColor: '#fff3e0',
    borderRadius: 8,
  },
  noteText: {
    color: '#e65100',
    textAlign: 'center',
    fontSize: 12,
  },
});