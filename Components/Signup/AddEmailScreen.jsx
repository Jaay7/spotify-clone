import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AddEmailScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#121212'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons name={ Platform.OS === 'ios' ? "arrow-back-ios" : "arrow-back"} size={24} color="#fff" onPress={() => navigation.goBack()} />
          {Platform.OS === 'ios' && <><View style={{flex: 0.5}}></View><Text style={styles.headerText}>Create account</Text></>}
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.label}>What's your email?</Text>
            <TextInput autoFocus style={styles.input} />
            <Text style={styles.sub_label}>You'll need to confirm this email later.</Text>
          </View>
          <View style={{height: 35}}></View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DOB')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AddEmailScreen

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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  sub_label: {
    fontSize: 11,
    color: '#fff',
    marginTop: 10
  },
  input: {
    backgroundColor: '#72727270',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 15,
    color: '#fff',
    width: Platform.OS === 'web' ? 350 : '80%',
  },
  button: {
    backgroundColor: '#1DB954',
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});