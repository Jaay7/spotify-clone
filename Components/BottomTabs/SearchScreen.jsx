import React from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const startData = [
  {name: 'Pop', color: '#9283a7'},
  {name: 'Hip-Hop', color: '#45bbff'},
  {name: 'Dance/Electronic', color: '#a13434'},
  {name: 'Indie', color: '#eb4d4b'},
  // {name: 'Love Pop', color: '#c38b8b'},
]

const SearchScreen = () => {
  // const tabBarHeight = useBottomTabBarHeight();
  const [visible, setVisible] = React.useState(false);

  // const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View style={styles.container}>
      {Platform.OS === 'web' && <View style={styles.tabbar}>
          <AntDesign name="leftcircle" size={28} color="#ffffff70" />
          <AntDesign name="rightcircle" size={28} color="#ffffff70" style={{marginLeft: 15, marginRight: 15}}/>
          <TextInput style={styles.input} placeholder='Artists, songs, or podcasts' />
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
        <View style={styles.body}>
        {Platform.OS !== 'web' && 
          <><Text style={[styles.headings, {fontSize: 30}]}>Search</Text>
          <TextInput style={styles.input} placeholder='Artists, songs, or podcasts' /></>
        }
          <Text style={styles.headings}>Your top gernes</Text>
          <View style={styles.items}>
            {startData.map((item, index) => (
              <TouchableOpacity key={index} style={styles.item}>
                <View style={{height: '100%', backgroundColor: item.color, width: '100%', padding: 10}}>
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
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
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flex: 1,
    backgroundColor: '#121212',
  },
  headings: {
    fontSize: Platform.OS === 'web' ? 30 : 18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 15
  },
  tabbar: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 25,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  body: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    flex: 1,
  },
  input: {
    backgroundColor: '#f1f1f1',
    height: Platform.OS === 'web' ? 40 : 50,
    borderRadius: Platform.OS === 'web' ? 50 : 5,
    paddingHorizontal: 15,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: Platform.OS === 'web' ? 'nowrap' : 'wrap',
    overflow: 'scroll',
    justifyContent: 'space-between',
    
  },
  item: {
    backgroundColor: '#46464680',
    width: Platform.OS === 'web' ? '30%' : '48%',
    margin: Platform.OS === 'web' ? 10 : 0,
    marginTop: 10,
    height: Platform.OS === 'web' ? 200 : 70,
    borderRadius: 7,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: Platform.OS === 'web' ? 22 : 16,
  },
  songName: {
    // flex: 1,
    width: '50%',
    overflow: 'hidden',
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 12,
  }
})