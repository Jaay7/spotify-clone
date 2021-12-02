import React from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Platform, StatusBar, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { BottomSheet } from 'react-native-btr';

const startData = [
  {name: 'Pop', color: '#9283a7'},
  {name: 'Hip-Hop', color: '#45bbff'},
  {name: 'Dance/Electronic', color: '#a13434'},
  {name: 'Indie', color: '#eb4d4b'},
  // {name: 'Love Pop', color: '#c38b8b'},
]

const Item = ({ item, onPress, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={[styles.title, textColor]}>{item.id}</Text>
  </TouchableOpacity>
);

const YourLibraryScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const [openBSheet, setOpenBSheet] = React.useState(false);
  const [sortText, setSortText] = React.useState('Recently played');
  // const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const toggleBottomNavigationView = () => {
    setOpenBSheet(!openBSheet);
  };

  const renderItem = ({ item }) => {
    const color = item.id === sortText ? '#1ED760' : '#e2e2e2';

    return (
      <Item
        item={item}
        onPress={() => setSortText(item.id)}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {Platform.OS === 'web' && <View style={styles.tabbar}>
          <AntDesign name="leftcircle" size={28} color="#ffffff70" />
          <AntDesign name="rightcircle" size={28} color="#ffffff70" style={{marginLeft: 15, marginRight: 15}}/>
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
        {Platform.OS !== 'web' && 
        <View style={styles.header}>
          <View style={{height: 30, width: 30, borderRadius: 30, backgroundColor: '#ffffff70', marginRight: 10}} />
          <Text style={styles.headings}>Your Library</Text>
          <View style={{flex: 1}}></View>
            <>
            <AntDesign name="search1" size={24} color="#fff" style={{padding: 10}} />
            <AntDesign name="plus" size={24} color="#fff" style={{padding: 10}} />
            </>
        </View>
          }
        <View style={styles.body}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.chips}><Text style={styles.chipsText}>Playlist</Text></TouchableOpacity>
            <TouchableOpacity style={styles.chips}><Text style={styles.chipsText}>Albums</Text></TouchableOpacity>
            <TouchableOpacity style={styles.chips}><Text style={styles.chipsText}>Downloaded</Text></TouchableOpacity>
          </View>
          <View style={[styles.header, {marginTop: 0}]}>
            <MaterialCommunityIcons name="playlist-check" size={24} color="#fff" style={{padding: 10}} />
            <Text style={styles.itemText} onPress={toggleBottomNavigationView}>{sortText}</Text>
            <View style={{flex: 1}}></View>
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
      <BottomSheet
        isVisible={openBSheet}
        containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={{backgroundColor: '#fff', height: '100%', width: '100%', borderRadius: 10, padding: 10}}>
          <Text style={styles.headings}>Sort by</Text>
          <FlatList
            data={[{id: 'Recently Played'}, {id: 'Recently added'}, {id: 'Alphabetical'}, {id: 'Creator'}]}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={sortText}
          />
        </View>
      </BottomSheet>
    </View>
  )
}

export default YourLibraryScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flex: 1,
    backgroundColor: '#121212',
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
    marginTop: Platform.OS === 'web' ? 0 : StatusBar.currentHeight+20,
  },
  headings: {
    fontSize: Platform.OS === 'web' ? 30 : 22,
    color: '#fff',
    fontWeight: 'bold',
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
  },
  songName: {
    // flex: 1,
    width: '50%',
    overflow: 'hidden',
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 12,
  },
  chips: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#8c8c8c',
    marginRight: 10,
    marginBottom: 10,
  },
  chipsText: {
    fontSize: 12,
    color: '#fff',
  },
  itemText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  }
})