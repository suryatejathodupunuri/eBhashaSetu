import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Auth'); // Navigate to AuthScreen after 2 seconds
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
     <Image source={require('../../../assets/splash-icon.png')} style={styles.logo} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background
  },
  logo: {
    width: 150, // Adjust size as needed
    height: 150,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
