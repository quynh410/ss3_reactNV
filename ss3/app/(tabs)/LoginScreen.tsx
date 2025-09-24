import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  Alert 
} from 'react-native';
import Header from '@/components/Header';
import { COLORS, FONT_SIZES, SPACING, CONTAINER_STYLES, TYPOGRAPHY_STYLES, BUTTON_STYLES, INPUT_STYLES } from '@/styles/GlobalStyles';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!');
      return;
    }
    
    Alert.alert('Thành công', `Chào mừng ${username}!`);
  };

  return (
    <View style={CONTAINER_STYLES.screenWithHeader}>
      <Header title="Đăng nhập" />
      <View style={CONTAINER_STYLES.contentCentered}>
        <View style={CONTAINER_STYLES.formContainer}>
        
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image 
            source={{ 
              uri: 'https://rikkei.edu.vn/wp-content/uploads/2024/12/logo-rikkei2.png' 
            }}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Form */}
        <View style={CONTAINER_STYLES.form}>
          
          {/* Username Input */}
          <View style={INPUT_STYLES.container}>
            <Text style={INPUT_STYLES.label}>Tên đăng nhập</Text>
            <TextInput
              style={INPUT_STYLES.input}
              placeholder="Nhập tên đăng nhập"
              placeholderTextColor={COLORS.text.placeholder}
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View style={INPUT_STYLES.container}>
            <Text style={INPUT_STYLES.label}>Mật khẩu</Text>
            <TextInput
              style={INPUT_STYLES.input}
              placeholder="Nhập mật khẩu"
              placeholderTextColor={COLORS.text.placeholder}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* Login Button */}
          <TouchableOpacity 
            style={[BUTTON_STYLES.primary, BUTTON_STYLES.medium]}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={TYPOGRAPHY_STYLES.button}>Đăng nhập</Text>
          </TouchableOpacity>

        </View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: SPACING['3xl'],
  },
  logo: {
    width: 280,
    height: 100,
  },
});
