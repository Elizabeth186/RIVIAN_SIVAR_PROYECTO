import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { auth } from './firebase';
const Services =() => {

  const navigation = useNavigation()

//   const SignOut = () => {
//     auth
//       .signOut()
//       .then(() => {
//         navigation.replace("Login")
//       })
//       .catch(error => alert(error.message))
//   }

  return (
    <SafeAreaView style={styles.container}>
        <Text>Servicios</Text>
    </SafeAreaView>
  )
}
    

export default Services
const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems:'center',
  paddingTop:'30%'
}
})