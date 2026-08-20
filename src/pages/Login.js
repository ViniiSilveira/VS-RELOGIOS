import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar style="light" />

      <View style={styles.overlay} />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>LOGIN</Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Ionicons
              name="mail"
              size={17}
              color="#d4af37"
              style={styles.icon}
            />

            <TextInput
              style={styles.input}
              placeholder="E-MAIL"
              placeholderTextColor="#b8a26a"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed"
              size={17}
              color="#d4af37"
              style={styles.icon}
            />

            <TextInput
              style={styles.input}
              placeholder="SENHA"
              placeholderTextColor="#b8a26a"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!mostrarSenha}
            />

            <TouchableOpacity
              onPress={() => setMostrarSenha(!mostrarSenha)}
            >
              <Ionicons
                name={mostrarSenha ? 'eye-off' : 'eye'}
                size={17}
                color="#b8a26a"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={styles.registerText}>
              Não possui uma conta?{' '}
              <Text style={styles.registerBold}>CADASTRE-SE</Text>
            </Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#080808',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },

  title: {
    color: '#d4af37',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: 25,
  },

  form: {
    width: '100%',
    maxWidth: 330,
    backgroundColor: 'rgba(60, 60, 60, 0.78)',
    borderRadius: 12,
    padding: 25,
  },

  inputContainer: {
    height: 42,
    backgroundColor: '#b89a52',
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 12,
  },

  icon: {
    marginRight: 8,
  },

  input: {
    flex: 1,
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },

  button: {
    alignSelf: 'center',
    backgroundColor: '#d4af37',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 22,
    marginTop: 10,
    marginBottom: 18,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },

  registerText: {
    color: '#c8c8c8',
    fontSize: 11,
    textAlign: 'center',
  },

  registerBold: {
    color: '#d4af37',
    fontWeight: '700',
  },
});