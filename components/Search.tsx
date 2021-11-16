import React from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';

const Search = (props) =>{
    return(
        <View style={styles.search}>
            <Image style={ styles.icon} source={require('../assets/images/search.svg')}/>
            <TextInput />
            <Image style={ styles.icon} source={require('../assets/images/settings.svg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        width: '90%',
        borderRadius: 10,
        height: 45,
        backgroundColor: "#EDEDED",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    icon: {
        width: 24,
        height: 24
    }
})

export default  Search;