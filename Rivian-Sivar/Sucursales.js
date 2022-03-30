import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { auth } from './firebase';
const Sucursales =() => {

  const navigation = useNavigation()

  const SignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text>Sucursales</Text>
    </SafeAreaView>
  )
}
    

export default Sucursales
const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems:'center',
  paddingTop:'30%'
}
})