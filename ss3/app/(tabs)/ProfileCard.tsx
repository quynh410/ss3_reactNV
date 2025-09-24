import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import Header from '@/components/Header';

interface ProfileCardProps {
  name: string;
  description: string;
  avatarUrl?: string;
}

function ProfileCard({ 
  name, 
  description, 
  avatarUrl = 'https://i.pravatar.cc/150' 
}: ProfileCardProps) {
  return (
    <View style={profileCardStyles.container}>
      <Image 
        source={{ uri: avatarUrl }} 
        style={profileCardStyles.avatar}
        resizeMode="cover"
      />
      <Text style={profileCardStyles.name}>{name}</Text>
      <Text style={profileCardStyles.description}>{description}</Text>
    </View>
  );
}

export default function ProfileCardScreen() {
  return (
    <ThemedView style={styles.container}>
      <Header title="Profile Card" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <ProfileCard 
          name="Lê Minh Anh"
          description="Software Engineer | Mobile Developer"
          avatarUrl="https://i.pravatar.cc/150?img=2"
        />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
});

const profileCardStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    margin: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
  },
});
