import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index"></Stack.Screen>
        <Stack.Screen name="(tabs)"></Stack.Screen>
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({
})