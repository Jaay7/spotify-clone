import React from 'react'
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' color={'#121212'} />
      <MaterialCommunityIcons name="spotify" size={50} color="#fff" />
      <View style={{height: 15}}></View>
      <Text style={styles.heading}>Millions of songs.</Text>
      <Text style={styles.heading}>Free on Spotify.</Text>
      <View style={{height: 35}}></View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddEmail')}>
        <Text style={styles.buttonText}>Sign up free</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ctnButton}>
        <AntDesign name="mobile1" size={26} color="#fff" />
        <Text style={styles.ctnButtonText}>Continue with phone number</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ctnButton}>
        <MaterialCommunityIcons name="google" size={26} color="#fff" />
        <Text style={styles.ctnButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ctnButton}>
        <MaterialCommunityIcons name="facebook" size={26} color="#fff" />
        <Text style={styles.ctnButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      {Platform.OS === 'ios' && 
      <TouchableOpacity style={styles.ctnButton}>
        <MaterialCommunityIcons name="apple" size={26} color="#fff" />
        <Text style={styles.ctnButtonText}>Continue with Apple</Text>
      </TouchableOpacity>
      }
      <View style={{height: 15}}></View>
      <Text style={styles.ctnButtonText} onPress={() => navigation.navigate('Login')}>Login</Text>
      <View style={{height: 60}}></View>
    </View>
  )
}

export default LandingScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  heading: {
    color: '#fff',
    fontSize: 29,
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    backgroundColor: '#1DB954',
    borderRadius: 50,
    width: Platform.OS === 'web' ? 350 : '80%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ctnButton: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#727272',
    width: Platform.OS === 'web' ? 350 : '80%',
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  ctnButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    width: Platform.OS === 'web' ? 350 : '80%',
    textAlign: 'center'
  }
})