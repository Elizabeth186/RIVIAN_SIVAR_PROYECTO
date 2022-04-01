import React from 'react';
import { SafeAreaView, Text,
  View,Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const Sucursales = () => {

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titulo}>
      <Text style={styles.txttitulo}>Visita Nuestras Sucusales</Text>
      </View>
      <View style={styles.viewlocal1} >
        <TouchableOpacity style={styles.local1}
          onPress={() => { Linking.openURL('https://goo.gl/maps/GqVcDwjwJspEX3H1A') }}>
           <Image style={styles.image1}
            source={require("./assets/garage.png")} />
            <View style={{flexDirection:'column'}}>
          <Text style={styles.txtS1}>San Salvador</Text>
          <Image style={styles.imageempresa}
           source={require("./assets/nombreempresa.png")} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.viewlocal1} >
        <TouchableOpacity style={styles.local1}
          onPress={() => { Linking.openURL('https://goo.gl/maps/GqVcDwjwJspEX3H1A') }}>
           <Image style={styles.image1}
           source={require("./assets/garage.png")} />
           <View style={{flexDirection:'column'}}>
          <Text style={styles.txtS1}>La libertad</Text>
          <Image style={styles.imageempresa2}
           source={require("./assets/nombreempresa.png")} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}



export default Sucursales
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor:'#ffffff'
   
  },
  viewlocal1:{
    alignItems:'center',
    marginLeft:'10%',
    marginRight:'10%',
    marginBottom:'8%',
    borderColor:'#0E4C59',
    borderWidth:4,
    width:'80%',
    height:'20%',
    borderRadius:13,
    elevation:15
  },viewlocal2:{
    alignItems:'center',
    marginTop:'3%',
    width:'16%',
    height:'30%',
    borderColor:'#0E4C59',
    borderWidth:2,
    borderRadius:12,
    elevation:15
    
  },
  imageempresa:{
    padding:13,
    width:'100%',
    height:'10%',
    marginLeft:'20%',
    marginTop:"10%"
  },
  imageempresa2:{
    padding:13,
    width:'110%',
    height:'10%',
    marginLeft:'20%',
    marginTop:"10%"
  },
  image1:{
    width:'20%',
    height:'60%',
    marginTop:'5%',
    marginLeft:'5%'
  },
  local1:{
backgroundColor:'#ffffff',
width:'100%',
height:'100%',
flexDirection:'row',
borderRadius:9
  },
  txtS1:{
    textAlign:'center',
    marginTop:'10%',
    color:'#307B8C',
    fontWeight:'bold',
    fontSize: 25,
    marginLeft:'20%'
  },
  
  txtL1:{
    textAlign:'center',
    marginTop:'10%',
    color:'#ffffff',
    fontWeight:'bold',
    fontSize: 25
  },
  titulo:{
    width:'99%',
    height:75,
    backgroundColor:'#154C59',
    borderRadius: 10,
    marginBottom:'5%',
marginLeft:'0.5%'
  },
  txttitulo:{
    fontSize:30,
    width:'100%',
    height:'100%',
    textAlign:'center',
    color:'#ffffff',
    marginTop:'5%',
    fontWeight:'bold'
  }

  })
