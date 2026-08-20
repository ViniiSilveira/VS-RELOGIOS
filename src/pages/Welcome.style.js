import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#080808',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },

  welcome: {
    color: '#d4af37',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 2,
    textAlign: 'center',
  },

  brand: {
    color: '#d4af37',
    fontSize: 29,
    fontWeight: '700',
    letterSpacing: 3,
    marginTop: 3,
    marginBottom: 55,
  },

  buttons: {
    width: '100%',
    alignItems: 'center',
  },

  button: {
    width: 230,
    height: 45,
    backgroundColor: '#d4af37',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
  },

  registerButton: {
    width: 230,
    height: 45,
    borderWidth: 1,
    borderColor: '#d4af37',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  registerText: {
    color: '#d4af37',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
  },

});

export default styles;