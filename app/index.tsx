import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Mein Kontaktbuch</Text>
        <Link style={styles.link} href="/(tabs)/home">starte Kontaktbuch</Link>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"rgb(183, 192, 209)",
        justifyContent:"center",
        alignItems:"center"
    },
    headline:{
        fontSize:40,
        backgroundColor:"rgba(255, 0, 0, 0.66)",
        padding:20,
        borderRadius:5
    },
    link:{
        marginTop:10,
        color:"blue"
    }
})