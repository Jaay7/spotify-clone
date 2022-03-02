import React from 'react'
import { View, Text, Platform, StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import YourLibraryScreen from './YourLibraryScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import CreatePlaylistScreen from './../CreatePlaylistScreen';
import LikedSongsScreen from './../LikedSongsScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#121212'}}>
      <DrawerContentScrollView {...props}>
        <DrawerItem icon={() => <MaterialCommunityIcons name="spotify" size={42} color="#fff" />} label="Spotify" labelStyle={{fontSize: 24, fontWeight: 'bold', color: '#fff'}} />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const DashboardScreen = ({navigation}) => {
  const [play, setPlay] = React.useState(false);
  return (
    Platform.OS === 'web' ? 
      <>
      <Drawer.Navigator 
        initialRouteName="Home"
        defaultStatus='open'
        screenOptions={{
          drawerType: 'permanent',
          drawerStyle: {width: 250, backgroundColor: '#000000', borderRightWidth: 0},
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#727272',
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            headerShown: false, 
            drawerIcon: ({color}) => <MaterialCommunityIcons name="home" size={24} color={color} /> 
          }}
        />
        <Drawer.Screen 
          name="Search" 
          component={SearchScreen}
          options={{ 
            headerShown: false,
            drawerIcon: ({color}) => <AntDesign name="search1" size={24} color={color} />
          }}
        />
        <Drawer.Screen 
          name="YourLibrary" 
          component={YourLibraryScreen} 
          options={{ 
            headerShown: false,
            drawerLabel: 'Your Library',
            drawerIcon: ({color}) => <MaterialCommunityIcons name="bookshelf" color={color} size={24} />
          }}
        />
        <Drawer.Screen 
          name="CreatePlaylist" 
          component={CreatePlaylistScreen} 
          options={{ 
            headerShown: false,
            drawerLabel: 'Create Playlist',
            drawerIcon: ({color}) => <MaterialIcons name="add-box" color={color} size={24} />
          }}
        />
        <Drawer.Screen 
          name="LikedSongs" 
          component={LikedSongsScreen}  
          options={{ 
            headerShown: false,
            drawerLabel: 'Liked Songs',
            drawerIcon: ({color}) => <MaterialCommunityIcons name="heart-box" color='#8075E8' size={24} />
          }}
        />
      </Drawer.Navigator>
      <View style={{ bottom: 0, position: 'absolute', width: '100%', height: 90, backgroundColor: '#121212', alignSelf: 'center', zIndex: 1,display: 'flex', alignItems: 'center', paddingHorizontal: 5, flexDirection: 'row', overflow: 'hidden', justifyContent: 'space-between'}}>
        <View style={styles.title}>
          <View style={{backgroundColor: '#ffffff60', height: 45, width: 45, marginLeft: 20}}></View>
          <Text style={styles.songName}>Livin It Up(with Post Malone & A$AP Rocky)</Text>
        </View>
        <View style={styles.controls}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
            <Ionicons name="shuffle" size={16} color="#4d4d4d" style={{padding: 8}}/>
            <AntDesign name="stepbackward" size={16} color="#9a9a9a" style={{padding: 8}}/>
            <AntDesign name={play === true ? "pausecircle" : "play"} size={28} color="#fff" style={{padding: 8}} onPress={() => setPlay(!play)}/>
            <AntDesign name="stepforward" size={16} color="#9a9a9a" style={{padding: 8}}/>
            <Ionicons name="repeat" size={16} color="#4d4d4d" style={{padding: 8}}/>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
            <Text style={{color: '#9a9a9a', fontWeight: 'bold', fontSize: 12}}>1:58</Text>
            <View style={{backgroundColor: '#727272', height: 4, width: '85%', borderRadius: 10}}>
              <View style={{backgroundColor: '#f1f1f1', height: 4, width: '45%', borderRadius: 10}} />
            </View>
            <Text style={{color: '#9a9a9a', fontWeight: 'bold', fontSize: 12}}>3:28</Text>
          </View>
        </View>
        <View style={styles.addons}>
          <MaterialCommunityIcons name="microphone-outline" size={18} color="#9b9b9b" style={{padding: 6}}/>
          <MaterialCommunityIcons name="playlist-play" size={20} color="#9b9b9b" style={{padding: 6}}/>
          <MaterialCommunityIcons name="desktop-classic" size={16} color="#9b9b9b" style={{padding: 6}}/>
          <AntDesign name="sound" size={18} color="#9b9b9b" style={{padding: 6}}/>
          <View style={{backgroundColor: '#9a9a9a', height: 4, width: 90, borderRadius: 10}} />
          <FontAwesome name="expand" size={14} color="#9b9b9b" style={{padding: 6}}/>
        </View>
      </View>
      </>
    : <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarStyle: { backgroundColor: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)', position: 'absolute', height: 60, borderTopWidth: 0}
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="YourLibrary"
        component={YourLibraryScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Your Library',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookshelf" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default DashboardScreen


const styles = StyleSheet.create({
  songName: {
    flex: 1,
    overflow: 'hidden',
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 12,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
  controls: {
    flexDirection: 'column',
    display: 'flex',
    width: '35%'
  },
  addons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  }
})