import { Stack } from 'expo-router';

export default function ChallengesLayout() {
  return (
    <Stack
      screenOptions={{
        
        tabBarStyle: { display: 'none' },
        headerShown: false
      }}
    >
      
      <Stack.Screen name="eco-tips" />

    </Stack>
  );
}