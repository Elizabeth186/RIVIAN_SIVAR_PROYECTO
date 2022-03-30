import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { auth } from './firebase';
const Home =(props) => {



  return (
    <SafeAreaView style={styles.container} >

    <View style={styles.containerLogo}>
        <Image style={styles.logo} 
        source={require("./assets/LogoSivar.png") }/>
      
      </View>
      <View style={styles.imgview}>
        <Image style={styles.img} source={require("./assets/foto.jpg") }/>
      </View>
      <View style={styles.Recargar}>
        <Text style={styles.textsuperior}>¿NO SABES DONDE</Text>
        <Text style={styles.textinferior}>RECARGAR TU AUTO ELECTRICO?</Text>
      </View>
      <View style={styles.viewsansalvador}>
        
      </View>

    </SafeAreaView>
  )
}
    

export default Home
const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems:'center',
  paddingTop:'30%'
},
containerLogo:{
width:'100%',
height:'11%',
alignItems:'center'
},
logo:{
width: '20%',
height:'60%',
padding:'5%',
marginTop:'5%',

},
imgview:{
width:'100%',
height: 400,
alignItems:'center',
backgroundColor:'black'
},

img:{
  width:'100%',
  height:'100%'
},
Recargar:{
borderColor: '#0E4C59',
borderWidth: 3,
height: '10%',
width:'90%',
marginTop: '5%',
alignItems:'center'
},
textsuperior:{
fontSize: 25,
backgroundColor:'#0E4C59',
width:'100%',
color:'#ffffff',
textAlign:'center'
},
textinferior:{
fontSize:16,
color:'#307B8C'
}
})