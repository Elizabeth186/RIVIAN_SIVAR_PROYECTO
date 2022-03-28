import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { auth } from './firebase'
const HomeScreen =() => {

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
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}
        onPress={SignOut}
       
      >
        <Text>Cerrar Sesion</Text>
      </TouchableOpacity>
    </View>
  )
}
    

export default HomeScreen
const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems:'center',
  paddingTop:'30%'
}
})