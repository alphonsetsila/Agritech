import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ecoTips = [
  {
    category: 'Alimentation',
    tips: [
      'Achetez des produits locaux et de saison',
      'Réduisez votre consommation de viande',
      'Évitez le gaspillage alimentaire'
    ]
  },
  {
    category: 'Transport',
    tips: [
      'Privilégiez la marche ou le vélo',
      'Utilisez les transports en commun',
      'Optez pour le covoiturage'
    ]
  },
  // ... autres catégories
];

export default function EcoTipsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Conseils Écologiques</Text>
      
      {ecoTips.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.category}</Text>
          {section.tips.map((tip, tipIndex) => (
            <View key={tipIndex} style={styles.tipCard}>
              <Text style={styles.tipText}>✓ {tip}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f9f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2e8b57',
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2e8b57',
    paddingLeft: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#2e8b57',
  },
  tipCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  tipText: {
    fontSize: 15,
    lineHeight: 22,
  },
});