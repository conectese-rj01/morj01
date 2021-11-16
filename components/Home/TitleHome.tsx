import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TitleHome = (props)=>{
    return (
        <View style={styles.viewHeader}>
            <View>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                </View>
                <View style={styles.viewSubtitle}>
                    <Text style={styles.subtitle}>
                        {props.subtitle}
                    </Text>
                </View>
            </View>
            <View>
               <Image style={styles.profile}
               source={require('../../assets/images/profile.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewHeader: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between',

    },
    title: {
        color: '#464A4D',
        fontSize: 25,
        fontWeight: 'bold'
    },
    viewSubtitle: {
        marginTop: -10,
    },
    subtitle: {
        color: '#464A4D',
        fontSize: 25,
        fontWeight: 'bold'
    },
    profile: {
        width: 38,
        height: 38,
        marginRight: 30
    }
});


export default TitleHome;