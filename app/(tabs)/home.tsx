import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const home = () => {
  const contacts=[
    {
      "name":"Matthias",
      "phone":"0173200300",
      "email":"test@email.de"
    },
    {
      "name":"Matthias",
      "phone":"0173200300",
      "email":"test@email.de"
    },
    {
      "name":"Matthias",
      "phone":"0173200300",
      "email":"test@email.de"
    }
  ]
  const renderItem=({item})=>(
    <View style={styles.contactItem}>
      <Text style={styles.bold}>{item.name}</Text>
      <Text>{item.phone}</Text>
      <Text>{item.email}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>meine Kontakte</Text>
      <FlatList data={contacts} renderItem={renderItem} keyExtractor={(item, index)=> index.toString()}></FlatList>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:"rgb(191, 206, 218)"
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom: 20,
    textAlign: "center"
  },
  contactItem:{
    padding:15,
    borderBottomWidth:1,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  bold:{
    fontWeight:"bold"
  }
})