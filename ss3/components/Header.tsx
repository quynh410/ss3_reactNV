import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

interface HeaderProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

export default function Header({ 
  title, 
  backgroundColor, 
  textColor,
  showBackButton = false,
  onBackPress 
}: HeaderProps) {
  return (
    <View style={[
      styles.container,
      { backgroundColor: backgroundColor || styles.container.backgroundColor }
    ]}>
      <StatusBar 
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor={Platform.OS === 'android' ? (backgroundColor || '#007AFF') : 'transparent'}
      />
      
      <View style={styles.content}>
        {showBackButton && (
          <View style={styles.backButtonContainer}>
            {/* Back button sẽ được implement sau nếu cần */}
          </View>
        )}
        
        <Text style={[
          styles.title,
          { color: textColor || styles.title.color }
        ]}>
          {title}
        </Text>
        
        {showBackButton && (
          <View style={styles.rightButtonContainer}>
            {/* Placeholder cho button bên phải nếu cần */}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: Platform.select({
    ios: {
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      paddingBottom: 15,
      borderBottomWidth: 0.5,
      borderBottomColor: '#E5E5E7',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 0,
    },
    android: {
      backgroundColor: '#007AFF',
      paddingTop: StatusBar.currentHeight || 0,
      paddingBottom: 15,
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    default: {
      backgroundColor: '#007AFF',
      paddingTop: 20,
      paddingBottom: 15,
    }
  }),
  
  content: Platform.select({
    ios: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      height: 44, // Standard iOS header height
    },
    android: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      height: 56, // Standard Android header height
    },
    default: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      height: 50,
    }
  }),
  
  title: Platform.select({
    ios: {
      fontSize: 17,
      fontWeight: '600',
      textAlign: 'center',
      color: '#000000',
      flex: 1,
    },
    android: {
      fontSize: 20,
      fontWeight: '500',
      color: '#FFFFFF',
      flex: 1,
      marginLeft: 16,
    },
    default: {
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center',
      color: '#FFFFFF',
      flex: 1,
    }
  }),
  
  backButtonContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    width: 44,
    zIndex: 1,
  },
  
  rightButtonContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    width: 44,
    zIndex: 1,
  },
});
