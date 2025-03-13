import { StyleSheet, Text, View,TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const add = () => {
  const [name, setName]=useState("")
  const [phone, setPhone]=useState("")
  const [mail, setMail]=useState("")
  const save = async ()=>{
    if(name && phone && mail){
      const contact = {name, phone, mail}
      const existingContactString = await AsyncStorage.getItem("contacts")
      let contacts=[]
      if(existingContactString){
        contacts = JSON.parse(existingContactString)
      }
      contacts.push(contact)
      await AsyncStorage.setItem("contacts",JSON.stringify(contacts))
      setName("")
      setPhone("")
      setMail("")
    }else{
      Alert.alert("bitte alle Felder ausfüllen")
    }
  }
  return (
    <View style={styles.container}>
      <Text>Neuer Kontakt</Text>
      <Text>Name</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input}></TextInput>
      <Text>Telefonnummer</Text>
      <TextInput value={phone} onChangeText={setPhone} style={styles.input}></TextInput>
      <Text>Email</Text>
      <TextInput value={mail} onChangeText={setMail} style={styles.input}></TextInput>
      <Button title="Kontakt speichern" onPress={save}></Button>
    </View>
  )
}

export default add

const styles = StyleSheet.create({
  container:{
    padding:10
  },
  input:{
    backgroundColor:"white",
    padding:5,
    marginBottom:10,
    borderRadius:5,
    borderColor:"grey",
    borderWidth:1
  }
})