import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Heart, MessageCircle, Send } from 'lucide-react-native';
import Header from '@/components/Header';

export default function SocialPostScreen() {
  return (
    <View style={styles.container}>
      <Header title="Instagram" />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Ín ta gam</Text>
      
      <View style={styles.postCard}>
        
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
            style={styles.avatar}
          />
          <Text style={styles.userName}>Thụy Anh</Text>
        </View>

        <View style={styles.content}>
          <Image 
            source={{ uri: 'https://i.pinimg.com/736x/b8/86/b2/b886b20ce517adae1f8b2fb5bad00fe6.jpg' }}
            style={styles.postImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.actionBar}> 
          <TouchableOpacity style={styles.actionButton}>
            <Heart size={24} color="#ef4444" fill="#ef4444" />
            <Text style={styles.actionText}>Like</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <MessageCircle size={24} color="#3b82f6" />
            <Text style={styles.actionText}>Comment</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Send size={24} color="#10b981" />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            <Text style={{fontWeight: 'bold'}}>thuy_anh26 </Text>Một buổi chiều yên bình tại bờ biển 🌊☀️
            tào lao :))
          </Text>
        </View>

      </View>

      <View style={styles.postCard}>
        
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026705e' }}
            style={styles.avatar}
          />
          <Text style={styles.userName}>Nguyễn Thị Mai</Text>
        </View>

        <View style={styles.content}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop' }}
            style={styles.postImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.actionBar}>
          <TouchableOpacity style={styles.actionButton}>
            <Heart size={24} color="#ef4444" />
            <Text style={styles.actionText}>Like</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <MessageCircle size={24} color="#3b82f6" />
            <Text style={styles.actionText}>Comment</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Send size={24} color="#10b981" />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>
          <Text style={{fontWeight: 'bold'}}>nguyen_thi_mai22 </Text>🌲 Đi dạo trong rừng thông vào sáng sớm, không khí trong lành và tiếng chim hót líu lo. 
            toàn ma :))
          </Text>
        </View>

      </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#1f2937',
  },
  
  postCard: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    padding: 16,
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12, 
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  
  content: {
    marginBottom: 12, 
  },
  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
  },
  actionText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  
  description: {
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#374151',
  },
});
