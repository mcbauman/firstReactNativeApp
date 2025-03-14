import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const Tabslayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="home" options={{
          tabBarIcon:({color, size})=>(
            <Ionicons name="home" color={color} size={size}></Ionicons>
          ),
        }}></Tabs.Screen>

        <Tabs.Screen name="add" options={{
          tabBarIcon:({color, size})=>(
            <Ionicons name="add" color={color} size={size}></Ionicons>
          ),
        }}></Tabs.Screen>

        <Tabs.Screen name="profil" options={{
          tabBarIcon:({color, size})=>(
            <Ionicons name="body" color={color} size={size}></Ionicons>
          ),
        }}></Tabs.Screen>
    </Tabs>
  )
}

export default Tabslayout

const styles = StyleSheet.create({})