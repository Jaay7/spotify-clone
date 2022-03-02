import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Divider } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';

const SignupScreen = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#121212'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons name={ Platform.OS === 'ios' ? "arrow-back-ios" : "arrow-back"} size={24} color="#fff" onPress={() => navigation.goBack()} />
          {Platform.OS === 'ios' && <><View style={{flex: 0.5}}></View><Text style={styles.headerText}>Create account</Text></>}
        </View>
        <View style={styles.body}>
          <Text style={styles.label}>What's your name?</Text>
          <TextInput style={styles.input} />
          <Text style={styles.sub_label}>This appears on your Spotify profile.</Text>
          <Divider style={{backgroundColor: '#727272', marginVertical: 20}} />
          <Text style={styles.sub_label}>By tapping "Create account", you agree to the Spotify Terms of Use.</Text>
          <Text style={styles.sub_label_button}>Terms of Use</Text>
          <Text style={styles.sub_label}>To learn more about how Spotify collects, uses, shares and protects your personal data, please see the Spotify Privacy Policy.</Text>
          <Text style={styles.sub_label_button}>Privacy Policy</Text>
          <View style={{}}>
            <Text style={styles.sub_label}>I would prefer not to receive marketing messages from Spotify.</Text>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
          </View>
          <View style={{}}>
            <Text style={styles.sub_label}>Share my registration data with Spotify's content providers for marketing purposes.</Text>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
          </View>
          <View style={{flex: 1}}></View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
            <Text style={styles.buttonText}>Create account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignupScreen

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
    padding: 16,
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
    marginTop: 10,
    lineHeight: 16
  },
  sub_label_button: {
    fontSize: 11,
    color: '#1DB954',
    marginVertical: 15,
    fontWeight: 'bold',
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
    backgroundColor: '#fff',
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
  checkbox: {
    alignSelf: "center",
  },
});