import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText'; 
import { ThemedView } from '@/components/ThemedView';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* En-tête avec points utilisateur */}
      <ThemedView style={styles.header}>
        <ThemedText type="title">Mon Compost</ThemedText>
        <ThemedView style={styles.pointsContainer}>
          <Ionicons name="leaf" size={24} color="green" />
          <ThemedText style={styles.pointsText}>450 Points</ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Section principale */}
      <ThemedView style={styles.mainContent}>
        <ThemedText type="subtitle">Bienvenue, Éco-Warrior! ♻️</ThemedText>
        <ThemedText style={styles.description}>
          Transformez vos déchets en or vert et suivez votre impact écologique!
        </ThemedText>

        {/* Statistiques rapides */}
        <ThemedView style={styles.statsCard}>
          <ThemedText type="defaultSemiBold" >Objectifs</ThemedText>
          <ThemedView style={styles.statsRow}>
            <ThemedView style={styles.statItem}>
              <MaterialCommunityIcons name="recycle" size={30} color="green" />
              <ThemedText>12.5 kg</ThemedText>
              <ThemedText>Compostés</ThemedText>
            </ThemedView>
            <ThemedView style={styles.statItem}>
              <FontAwesome name="tree" size={30} color="green" />
              <ThemedText>3.1 kg</ThemedText>
              <ThemedText>CO2 Évités</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
        
        {/* Section pour les actions rapides */}
        <ThemedView style={styles.quickActions}>
          
          
          <TouchableOpacity style={styles.actionButton}>
            <ThemedView style={styles.actionIcon}>
              <Ionicons name="trophy" size={24} color="white" />
            </ThemedView>
            <ThemedText>Défis du jour</ThemedText>
          </TouchableOpacity>

          <Link href="/(tabs)/chanllenges/eco-tips" asChild>
          <TouchableOpacity style={styles.actionButton}>
            <ThemedView style={styles.actionIcon}>
              <Ionicons name="information-circle" size={24} color="white" />
            </ThemedView>
            <ThemedText>Conseils éco</ThemedText>
          </TouchableOpacity>
        </Link>
      
        </ThemedView>
      </ThemedView>
      
      {/* Note: Le menu de navigation a été retiré car il est maintenant géré par AppNavigator */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    borderRadius: 20,
    backgroundColor: '#e8f5e9',
  },
  pointsText: {
    fontSize: 18,
    color: 'green',
  },
  mainContent: {
    flex: 1,
    gap: 25,
  },
  description: {
    textAlign: 'center',
    color: '#666',
  },
  statsCard: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    gap: 15,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    gap: 5,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionButton: {
    alignItems: 'center',
    width: '30%',
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
});