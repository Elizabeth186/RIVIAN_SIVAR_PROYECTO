import React, { Component } from 'react'
import { SafeAreaView,ScrollView, Text,View,Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
const ModelR=()=>{
  const navigation = useNavigation()
    return (
      <SafeAreaView style={styles.container}>
        <View><Text style={styles.textStyle1}>RIVIAN R1</Text>
        <Image style={styles.image1} source={require("./assets/r2.jpg")  }/>
         </View>
        <Text style={styles.textStyle2}>Version ET</Text>
        <Text style={styles.textStyle3}>RANGO: 500 MILLAS</Text>
        <Text style={styles.textStyle3}>POTENCIA: 480HP</Text>
        <Text style={styles.textStyle3}>RECARGA: CONECTOR</Text>
        <Text style={styles.textStyle3}>PRECIO: $ 38,890</Text>
        <TouchableOpacity style={styles.button1} onPress={() =>navigation.navigate('BuyModelR', { name: 'BuyModelR' })}><Text style={styles.buttonText1}>Comprar</Text>
         </TouchableOpacity>
         <Text style={styles.textStyle21}>Version PRO</Text>
         <Text style={styles.textStyle3}>RANGO: 700 MILLAS</Text>
        <Text style={styles.textStyle3}>POTENCIA: 650HP</Text>
        <Text style={styles.textStyle3}>RECARGA:CONECTOR, SOLAR.</Text>
        <Text style={styles.textStyle3}>PRECIO: $ 48,190</Text>
         <TouchableOpacity style={styles.button1} onPress={() =>navigation.navigate('BuyModelR', { name: 'BuyModelR' })}><Text style={styles.buttonText1}>Comprar</Text>
         </TouchableOpacity>
      </SafeAreaView>
    )
  
}
export default ModelR

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:'20%',
    alignItems: 'center',
  },
  image1:{
    padding:12,
    height:200,
    width:400,
  
  },
  textStyle1:{
    position: 'absolute',
    zIndex: 10,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginTop: '40%',
    alignSelf: 'center',
  },
  textStyle2:{
    fontSize: 20,
    marginTop: '5%',
    color: '#606060',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textStyle21:{
    fontSize: 20,
    marginTop: '1%',
    color: '#606060',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textStyle3:{
    fontSize: 15,
    color: '#606060',
    marginVertical:'0.4%',
    alignSelf: 'flex-start',
    alignSelf: 'center',
  },
     button1:{
  backgroundColor: ('#0E4C59'),
  width: 100,
  height: 50,
  borderRadius: 11,
  marginVertical:'3%',
  alignSelf: 'center',
   },
   buttonText1:{
    textAlign: 'center',
    padding:10,
    color:'white',
    fontSize: 22,
     },
  })