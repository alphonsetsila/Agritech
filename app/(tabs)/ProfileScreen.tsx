import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function ProfileScreen() {
 
  const userData = {
    name: "Émilie Dupont",
    level: "Éco-Warrior Niveau 8",
    points: 450,
    since: "Mars 2024",
    compostedTotal: 142.5,
    co2Saved: 36.2,
    badges: [
      { name: "Premier Compost", icon: "leaf", date: "10 Mars 2024" },
      { name: "Super Recycleur", icon: "recycle", date: "15 Avril 2024" },
      { name: "Champion Local", icon: "medal", date: "02 Mai 2024" },
    ],
    recentActivity: [
      { type: "compost", amount: 3.2, date: "Hier" },
      { type: "badge", name: "Champion du mois", date: "3 jours" },
      { type: "compost", amount: 2.8, date: "5 jours" },
    ]
  };

  return (
    <ThemedView style={styles.container}>
      {/* En-tête avec bouton retour */}
      <ThemedView style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <ThemedText type="title">Mon Profil</ThemedText>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} />
        </TouchableOpacity>
      </ThemedView>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Section profil utilisateur */}
        <ThemedView style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/120' }} 
            style={styles.profileImage} 
          />
          <ThemedText type="subtitle">{userData.name}</ThemedText>
          <ThemedView style={styles.levelBadge}>
            <ThemedText style={styles.levelText}>{userData.level}</ThemedText>
          </ThemedView>
          
          <ThemedView style={styles.pointsDisplay}>
            <Ionicons name="leaf" size={24} color="green" />
            <ThemedText style={styles.pointsText}>{userData.points} Points</ThemedText>
          </ThemedView>
          
          <ThemedText style={styles.memberSince}>Membre depuis {userData.since}</ThemedText>
        </ThemedView>

        {/* Section statistiques */}
        <ThemedView style={styles.statsCard}>
          <ThemedText type="defaultSemiBold">Impact Écologique Total</ThemedText>
          <ThemedView style={styles.statsRow}>
            <ThemedView style={styles.statItem}>
              <MaterialCommunityIcons name="recycle" size={30} color="green" />
              <ThemedText style={styles.statValue}>{userData.compostedTotal} kg</ThemedText>
              <ThemedText>Compostés</ThemedText>
            </ThemedView>
            <ThemedView style={styles.statItem}>
              <FontAwesome5 name="tree" size={30} color="green" />
              <ThemedText style={styles.statValue}>{userData.co2Saved} kg</ThemedText>
              <ThemedText>CO2 Évités</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        {/* Section badges */}
        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Badges et Récompenses</ThemedText>
          <ThemedView style={styles.badgesContainer}>
            {userData.badges.map((badge, index) => (
              <ThemedView key={index} style={styles.badge}>
                <MaterialCommunityIcons n ={badge.icon} size={32} color="#4CAF50" />
                <ThemedText style={styles.badgeName}>{badge.name}</ThemedText>
                <ThemedText style={styles.badgeDate}>{badge.date}</ThemedText>
              </ThemedView>
            ))}
          </ThemedView>
        </ThemedView>

        {/* Section activité récente */}
        <ThemedView style={styles.section}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Activité Récente</ThemedText>
          {userData.recentActivity.map((activity, index) => (
            <ThemedView key={index} style={styles.activityItem}>
              {activity.type === "compost" ? (
                <>
                  <Ionicons name="leaf" size={24} color="green" />
                  <ThemedView style={styles.activityContent}>
                    <ThemedText>{activity.amount} kg compostés</ThemedText>
                    <ThemedText style={styles.activityDate}>{activity.date}</ThemedText>
                  </ThemedView>
                </>
              ) : (
                <>
                  <MaterialCommunityIcons name="medal" size={24} color="#FFD700" />
                  <ThemedView style={styles.activityContent}>
                    <ThemedText>Badge obtenu: {activity.name}</ThemedText>
                    <ThemedText style={styles.activityDate}>{activity.date}</ThemedText>
                  </ThemedView>
                </>
              )}
            </ThemedView>
          ))}
        </ThemedView>

        {/* Section actions */}
        <ThemedView style={styles.actionSection}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="share-social" size={22} color="white" />
            <ThemedText style={styles.actionText}>Partager Mon Impact</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
            <Ionicons name="download" size={22} color="green" />
            <ThemedText style={styles.secondaryActionText}>Télécharger Statistiques</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ScrollView>
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
  backButton: {
    padding: 8,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 25,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#4CAF50',
  },
  levelBadge: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginTop: 8,
  },
  levelText: {
    color: '#2E7D32',
  },
  pointsDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 15,
    backgroundColor: '#f0f9f0',
    padding: 12,
    borderRadius: 20,
  },
  pointsText: {
    fontSize: 18,
    color: 'green',
    fontWeight: '600',
  },
  memberSince: {
    marginTop: 8,
    color: '#666',
  },
  statsCard: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    marginBottom: 25,
    gap: 15,
    // Utiliser elevation sur Android au lieu de shadow
    elevation: 3,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    gap: 5,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    marginBottom: 15,
    fontSize: 18,
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    alignItems: 'center',
    backgroundColor: '#f0f9f0',
    padding: 12,
    borderRadius: 12,
    width: '30%',
    // Utiliser elevation sur Android au lieu de shadow
    elevation: 2,
  },
  badgeName: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 12,
    fontWeight: '600',
  },
  badgeDate: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    // Utiliser elevation sur Android au lieu de shadow
    elevation: 1,
  },
  activityContent: {
    marginLeft: 15,
    flex: 1,
  },
  activityDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  actionSection: {
    marginBottom: 25,
    gap: 12,
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 10,
    gap: 10,
    // Utiliser elevation sur Android au lieu de shadow
    elevation: 3,
  },
  actionText: {
    color: 'white',
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4CAF50',
    elevation: 0, // Pas d'ombre pour le bouton secondaire
  },
  secondaryActionText: {
    color: '#4CAF50',
    fontWeight: '600',
  },
});