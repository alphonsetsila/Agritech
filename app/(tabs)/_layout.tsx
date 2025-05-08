import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          elevation: 8,
          shadowOpacity: 0,
          height: 60,
          paddingBottom: 5
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: 'Transfert',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="swap-horizontal-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="challenges/index"
        options={{
          title: 'Défis',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy-outline" size={size} color={color} />
          ),
          tabBarButton: () => null, // Cache uniquement cet onglet
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: 'Connexion',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="log-in-outline" size={size} color={color} /> // Icône plus appropriée
          ),
          // Retirez tabBarButton: () => null pour afficher l'onglet
        }}
      />
    </Tabs>
  );
}