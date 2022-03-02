import React from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Platform, StatusBar, SafeAreaView } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { LinearGradient } from 'expo-linear-gradient';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const startData = [
  {name: 'CUT EM IN', color: '#f5f5f5'},
  {name: 'Liked Songs', color: '#45bbff'},
  {name: 'Pop Mix', color: '#a13434'},
  {name: 'PLAY: ASTRA', color: '#9283a7'},
  {name: 'Alone Again', color: '#eb4d4b'},
  {name: 'Love Pop', color: '#c38b8b'},
  {name: 'Love Pop', color: '#c38b8b'},
  {name: 'Love Pop', color: '#c38b8b'},
]

const HomeScreen = () => {
  // const tabBarHeight = useBottomTabBarHeight();
  const [visible, setVisible] = React.useState(false);

  // const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#121212'}}>
      <View style={styles.container}>
        <StatusBar backgroundColor='#00000070' barStyle='light-content' translucent />
        <LinearGradient 
          colors={['rgba(164,51,0,1)', 'rgba(18,18,18,1)']}
          end={[0, 0.38]}
          style={{height: '100%', width: '100%'}}
        >
        {Platform.OS === 'web' && <View style={styles.tabbar}>
          <AntDesign name="leftcircle" size={28} color="#00000080" />
          <AntDesign name="rightcircle" size={28} color="#00000080" style={{marginLeft: 15}}/>
          <View style={{flex: 1}} />
          <Provider>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              style={{alignSelf: 'flex-end', zIndex: 2}}
              anchor={
                <TouchableOpacity style={{paddingHorizontal: 5, paddingVertical: 5, borderRadius: 50, backgroundColor: '#000000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 100, alignSelf: 'flex-end' }} onPress={() => setVisible(true)}>
                  <View style={{height: 25, width: 25, borderRadius: 30, backgroundColor: '#ffffff70',}}></View>
                  <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15, marginLeft: 10, marginRight: 10}}>Jay</Text>
                  <AntDesign name="caretdown" size={12} color="#fff" />
                </TouchableOpacity>
              }>
              <Menu.Item onPress={() => {}} title="Account" />
              <Menu.Item onPress={() => {}} title="Profile" />
              <Menu.Item onPress={() => {}} title="Logout" />
            </Menu>
          </Provider>
        </View>
        }
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headings}>Good evening</Text>
          <View style={{flex: 1}}></View>
          {Platform.OS !== 'web' && 
            <>
            <SimpleLineIcons name="bell" size={22} color="#fff" style={{padding: 10}} />
            <SimpleLineIcons name="settings" size={22} color="#fff" style={{padding: 10}} />
            <Entypo name="back-in-time" size={24} color="#fff" style={{padding: 10}} />
            </>
          }
        </View>
        <View style={styles.body}>
          <View style={styles.items}>
            {startData.map((item, index) => (
              <TouchableOpacity key={index} style={styles.item}>
                <View style={{height: '100%', backgroundColor: item.color, width: '30%'}}></View>
                <View style={styles.subitem}>
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{height: 35}}></View>
          <View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={styles.headings}>Episodes for you</Text>
              {Platform.OS === 'web' && <Text style={styles.seeall}>SEE ALL</Text>}
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop: 15}}>
              {startData.map((item, index) => (
                <TouchableOpacity key={index} style={styles.bigItem}>
                  <View style={{height: Platform.OS === 'web' ? 160 : 130, backgroundColor: item.color, width: Platform.OS === 'web' ? 160 : 130, borderRadius: 10, marginBottom: 10}}></View>
                  <View style={styles.texts}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Text style={[styles.itemText, {color: '#727272'}]}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{height: 35}}></View>
          <View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={styles.headings}>Recently Played</Text>
              {Platform.OS === 'web' && <Text style={styles.seeall}>SEE ALL</Text>}
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop: 15}}>
              {startData.map((item, index) => (
                <TouchableOpacity key={index} style={styles.bigItem}>
                  <View style={{height: Platform.OS === 'web' ? 160 : 100, backgroundColor: item.color, width: Platform.OS === 'web' ? 160 : 100, borderRadius: 5, marginBottom: 10}}></View>
                  <View style={styles.texts}>
                    <Text style={styles.itemText}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{height: 35}}></View>
          <View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={styles.headings}>Your top mixes</Text>
              {Platform.OS === 'web' && <Text style={styles.seeall}>SEE ALL</Text>}
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop: 15}}>
              {startData.map((item, index) => (
                <TouchableOpacity key={index} style={styles.bigItem}>
                  <View style={{height: 130, backgroundColor: item.color, width: 130, borderRadius: 10, marginBottom: 10}}></View>
                  <View style={styles.texts}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Text style={styles.itemText}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          
          <View style={{height: Platform.OS ==='web' ? 80 : 60}}></View>
        </View>
      </ScrollView>
      </LinearGradient>
      {Platform.OS !== 'web' && <View style={{ bottom: Platform.OS ==='web' ? 0 : 60, position: 'absolute', width: '95%', height: 60, backgroundColor: '#461511', alignSelf: 'center', borderRadius: 10, zIndex: 1,display: 'flex', alignItems: 'center', paddingHorizontal: 5, flexDirection: 'row', overflow: 'hidden'}}>
          <View style={{backgroundColor: '#ffffff60', height: 45, width: 45, borderRadius: 10}}></View>
          <Text style={styles.songName}>Livin It Up(with Post Malone & A$AP Rocky)</Text>
          <AntDesign name="laptop" size={24} color="#fff" style={{padding: 8}}/>
          <AntDesign name="hearto" size={24} color="#fff" style={{padding: 8}}/>
          <AntDesign name="pause" size={24} color="#fff" style={{padding: 8}}/>
          <View style={{backgroundColor: '#ffffff', height: 2, width: '45%', borderRadius: 10, alignSelf: 'flex-end', position: 'absolute'}}></View>
        </View>
      }
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flex: 1,
    backgroundColor: '#121212',
  },
  tabbar: {
    display: Platform.OS === 'web' ? 'flex' : 'none',
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 25,
    paddingVertical: 10,
    width: '100%',
    backgroundColor: 'transparent',
  },
  header: {
    height: 60,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: '#00000000',
    marginTop: Platform.OS === 'web' ? 0 : StatusBar.currentHeight,
  },
  headings: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  body: {
    padding: 20,
    flex: 1,
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#46464660',
    width: Platform.OS === 'web' ? 300 : '48%',
    marginTop: 10,
    height: Platform.OS === 'web' ? 70: 50,
    borderRadius: 7,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subitem: {
    width: '60%'
  },
  itemText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bigItem: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 15,
    backgroundColor: Platform.OS === 'web' ? '#12121280' : 'transparent',
    padding: Platform.OS === 'web' ? 15 : 0,
    paddingBottom: Platform.OS === 'web' ? 30 : 0,
    borderRadius: Platform.OS === 'web' ? 5 : 0,
  },
  songName: {
    flex: 1,
    width: '50%',
    overflow: 'hidden',
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 12,
  },
  seeall: {
    color: '#9a9a9a',
    fontWeight: 'bold', 
    fontSize: 12,
  }
});