import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="#fff" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.body}>
        <Text style={styles.label}>Email or username</Text>
        <TextInput style={styles.input} />
        <View style={{height: 35}}></View>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} />
        <View style={{height: 35}}></View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ctnButton}>
          <Text style={styles.ctnButtonText}>Login without password</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flex: 1,
    backgroundColor: '#121212',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    height: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  body: {
    padding: 20,
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    backgroundColor: '#72727270',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 15,
    color: '#fff',
  },
  button: {
    height: 50,
    backgroundColor: '#1DB954',
    borderRadius: 50,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ctnButton: {
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#72727290',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 35
  },
  ctnButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    width: '70%',
    textAlign: 'center'
  }
});