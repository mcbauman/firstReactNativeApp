import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export default class profil extends Component {
  render() {
    return (
      <View>
        <Text>profil</Text>
        <Image source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }} style={{width: 200, height: 200}} />
        <ScrollView></ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})