import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { auth } from './firebase';
import Navigation from './Navigation';
import UserContext from './UserContext';
const HomeScreen =(props) => {

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
    <UserContext.Provider value={props.authData}>
      <Navigation {...props}/>
    </UserContext.Provider>
  )
/*
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.btn}
        onPress={SignOut}
       
      >
        <Text>Cerrar Sesion</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )*/
}
    

export default HomeScreen
const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems:'center',
  paddingTop:'30%'
}
})