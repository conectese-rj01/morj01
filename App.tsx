import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TitleHome from './components/Home/TitleHome';
import Search from './components/Search';
export default function App() {
  return (
    <SafeAreaView style={{height:'100%'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TitleHome title="Descubra" subtitle="lugares incríveis"/>
        </View>
        <View style={styles.search}>
          <Search />
        </View>
        <View style={styles.places}>
          <Text>Aqui virão os componentes de locais</Text>
        </View>
        <View style={styles.favorite}>
        <Text>Aqui virão os componentas Favoritos</Text>
        </View>
        <View style={styles.menu}>
        <Text>Aqui virá o menu</Text>
        </View>
        
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>

  );
}
//flex-box
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: 30,
  },
  header: {
    width: '100%',
    marginTop: '10%',
    flex: 1,
  },
  search: {
    width: '100%',
    flex: 1,
  },
  places: {
    width: '90%',
    flex: 3,
    borderWidth: 4,
  },
  favorite: {
    width: '90%',
    flex: 3,
    borderWidth: 4,
  },
  menu: {
    width: '90%',
    marginBottom: '20%',
    flex: 1,
    borderWidth: 4,
  }
});
