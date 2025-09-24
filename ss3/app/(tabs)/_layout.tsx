import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, StatusBar } from 'react-native';

// Import các component màn hình
import ProfileCardScreen from './ProfileCard';
import BoxScreen from './BoxScreen';
import SocialPostScreen from './SocialPostScreen';
import ProductScreen from './ProductScreen';
import NewsScreen from './NewsScreen';
import SettingsScreen from './SettingsScreen';
import LoginScreen from './LoginScreen';

export default function SimpleLayout() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const screens = [
    { key: 'home', title: 'Trang chủ', component: ProfileCardScreen },
    { key: 'box', title: 'Box Layout', component: BoxScreen },
    { key: 'social', title: 'Social Post', component: SocialPostScreen },
    { key: 'products', title: 'Sản phẩm', component: ProductScreen },
    { key: 'news', title: 'Tin tức', component: NewsScreen },
    { key: 'settings', title: 'Cài đặt', component: SettingsScreen },
    { key: 'login', title: 'Đăng nhập', component: LoginScreen },
  ];

  const currentScreenData = screens.find(screen => screen.key === currentScreen);
  const CurrentComponent = currentScreenData?.component || ProfileCardScreen;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      <View style={styles.header}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.menuContainer}
          contentContainerStyle={styles.menuContent}
        >
          {screens.map((screen) => (
            <TouchableOpacity
              key={screen.key}
              style={[
                styles.menuButton,
                currentScreen === screen.key && styles.activeMenuButton
              ]}
              onPress={() => setCurrentScreen(screen.key)}
              activeOpacity={0.7}
              hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
            >
              <Text style={[
                styles.menuButtonText,
                currentScreen === screen.key && styles.activeMenuButtonText
              ]}>
                {screen.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.content}>
        <CurrentComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight || 0,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
  },
  menuContent: {
    paddingRight: 20,
  },
  menuButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 20,
    marginRight: 10,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeMenuButton: {
    backgroundColor: 'white',
  },
  menuButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  activeMenuButtonText: {
    color: '#007AFF',
  },
  content: {
    flex: 1,
  },
});
