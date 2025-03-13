import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>index</Text>
        <Link href="/profil" style={styles.headline}>go to profile</Link>
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
        padding:10,
        borderRadius:5
    }
})