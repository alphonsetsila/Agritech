import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Button, TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Définir les types pour une meilleure sécurité
type BinType = 'Bac1' | 'Bac2' | 'SNS';
type BinData = {
  humidity: string;
  temp: string;
  compost: string;
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<BinType>('Bac1');
  const [showAddForm, setShowAddForm] = useState(false);
  const [clientName, setClientName] = useState('');
  const [weight, setWeight] = useState('');
  const [points, setPoints] = useState('');

  const bins: Record<BinType, BinData> = {
    'Bac1': { humidity: '65%', temp: '24°C', compost: '42%' },
    'Bac2': { humidity: '58%', temp: '22°C', compost: '38%' },
    'SNS': { humidity: '71%', temp: '26°C', compost: '49%' }
  };

  const handleAddWaste = () => {
    // Logique d'ajout ici
    console.log({ clientName, weight, points });
    setShowAddForm(false);
    // Réinitialiser les champs
    setClientName('');
    setWeight('');
    setPoints('');
  };

  // Fonction pour changer de bac
  const switchBin = (bin: BinType) => {
    setActiveTab(bin);
  };

  return (
    <View style={styles.container}>
      {!showAddForm ? (
        <>
          <Text style={styles.title}>Statut des Bacs</Text>
          
          {/* Sélecteur de bac */}
          <View style={styles.tabContainer}>
            {Object.keys(bins).map((bin) => (
              <Button 
                key={bin}
                mode={activeTab === bin ? "contained" : "outlined"}
                onPress={() => switchBin(bin as BinType)}
                style={styles.tabButton}
              >
                {bin}
              </Button>
            ))}
          </View>

          <Text style={styles.subtitle}>Détails - {activeTab}</Text>
          
          <View style={styles.metricsContainer}>
            <Card style={styles.metricCard}>
              <Card.Content style={styles.cardContent}>
                <MaterialCommunityIcons name="water" size={30} color="#3498db" />
                <Text style={styles.metricValue}>{bins[activeTab].humidity}</Text>
                <Text style={styles.metricLabel}>Humidité</Text>
              </Card.Content>
            </Card>

            <Card style={styles.metricCard}>
              <Card.Content style={styles.cardContent}>
                <MaterialCommunityIcons name="thermometer" size={30} color="#e74c3c" />
                <Text style={styles.metricValue}>{bins[activeTab].temp}</Text>
                <Text style={styles.metricLabel}>Température</Text>
              </Card.Content>
            </Card>

            <Card style={styles.metricCard}>
              <Card.Content style={styles.cardContent}>
                <MaterialCommunityIcons name="leaf" size={30} color="#2ecc71" />
                <Text style={styles.metricValue}>{bins[activeTab].compost}</Text>
                <Text style={styles.metricLabel}>Taux de compost</Text>
              </Card.Content>
            </Card>
          </View>

          <Button 
            mode="contained" 
            style={styles.addButton}
            labelStyle={styles.addButtonLabel}
            onPress={() => setShowAddForm(true)}
          >
            Ajouter un Déchet
          </Button>
        </>
      ) : (
        <Card style={styles.formCard}>
          <Card.Content>
            <Text style={styles.formTitle}>Nouveau Déchet</Text>
            
            <TextInput
              label="Nom du client"
              mode="outlined"
              value={clientName}
              onChangeText={setClientName}
              style={styles.input}
            />

            <TextInput
              label="Poids (kg)"
              mode="outlined"
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
              style={styles.input}
            />

            <TextInput
              label="Points attribués"
              mode="outlined"
              keyboardType="numeric"
              value={points}
              onChangeText={setPoints}
              style={styles.input}
            />

            <View style={styles.formButtons}>
              <Button 
                mode="outlined" 
                style={styles.cancelButton}
                onPress={() => setShowAddForm(false)}
              >
                Annuler
              </Button>
              <Button 
                mode="contained" 
                style={styles.submitButton}
                onPress={handleAddWaste}
              >
                Valider
              </Button>
            </View>
          </Card.Content>
        </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#2c3e50',
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tabButton: {
    marginHorizontal: 5,
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  metricCard: {
    width: '30%',
    borderRadius: 12,
    elevation: 3,
    backgroundColor: 'white',
  },
  cardContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  metricLabel: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  addButton: {
    marginTop: 20,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#27ae60',
  },
  addButtonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  formCard: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
    backgroundColor: 'white',
  },
  formButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
    borderColor: '#e74c3c',
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#27ae60',
  },
});