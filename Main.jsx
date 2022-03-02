import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './Components/BottomTabs/HomeScreen';
import LoginScreen from './Components/LoginScreen';
import AddEmailScreen from './Components/Signup/AddEmailScreen';
import LandingScreen from './Components/LandingScreen';
import DashboardScreen from './Components/BottomTabs/DashboardScreen';
import 'react-native-gesture-handler';
import AddDOBScreen from './Components/Signup/AddDOBScreen';
import AddGender from './Components/Signup/AddGender';
import SignupScreen from './Components/Signup/SignupScreen';

const Stack = createNativeStackNavigator();

const Main = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddEmail"
          component={AddEmailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DOB"
          component={AddDOBScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Gender"
          component={AddGender}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main 