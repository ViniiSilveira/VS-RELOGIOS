import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import styles from './Welcome.style';

export default function Welcome({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar style="light" />

      <View style={styles.overlay} />

      <View style={styles.container}>

        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.welcome}>
          BEM VINDO À
        </Text>

        <Text style={styles.brand}>
          VS RELÓGIOS
        </Text>

        <View style={styles.buttons}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>
              ENTRAR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={styles.registerText}>
              CADASTRAR-SE
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </ImageBackground>
  );
}