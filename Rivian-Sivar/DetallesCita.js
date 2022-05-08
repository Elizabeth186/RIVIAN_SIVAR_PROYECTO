import React, { Component } from 'react'
import { SafeAreaView,ScrollView,TextInput,View,Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/core';



const DetallesCita = () => {

    const navigation = useNavigation()

    const [checked, setChecked] = React.useState('first');

  return (
      <SafeAreaView style={styles.container}>
    <View >
    
      <TextInput
          placeholder="Nombre Completo"
          style={styles.input1}
        />
       
    </View>
    </SafeAreaView>
  )
}



export default DetallesCita

const styles = StyleSheet.create({
    container:{
      flex: 1,
      paddingTop:'20%',
      alignItems: 'center',
    }
})