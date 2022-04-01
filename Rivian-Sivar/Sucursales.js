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
            source={require("./assets/Location.png")} />
            <View style={{flexDirection:'column'}}>
          <Text style={styles.txtS1}>San Salvador</Text>
          <Text style={styles.txtS2}>Bulevar venezuela, km 12,
          local #45, {"\n"}frente a Galvaniza</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.viewlocal1} >
        <TouchableOpacity style={styles.local2}
          onPress={() => { Linking.openURL('https://goo.gl/maps/GqVcDwjwJspEX3H1A') }}>
           <Image style={styles.image2}
           source={require("./assets/Location.png")} />
           <View style={{flexDirection:'column'}}>
          <Text style={styles.txtL1}>La libertad</Text>
          <Text style={styles.txtL2}>Santa Tecla, calle poniente,{"\n"}
          76 avenida norte</Text>
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
    height:'16%',
    borderRadius:13,
    elevation:15
  },viewlocal2:{
    alignItems:'center',
    marginTop:'3%',
    width:'16%',
    height:'20%',
    borderColor:'#0E4C59',
    borderWidth:2,
    borderRadius:12,
    elevation:15
  },
  image1:{
    width:'20%',
    height:'60%',
    marginTop:'5%',
    marginLeft:'5%'
  },

   image2:{
    width:'20%',
    height:'60%',
    marginTop:'5%',
    marginLeft:'5%'
  },
  local1:{
backgroundColor:'#307B8C',
width:'100%',
height:'100%',
flexDirection:'row',
borderRadius:9
  },
  local2:{
    backgroundColor:'#307B8C',
    width:'100%',
    height:'100%',
    flexDirection:'row',
    borderRadius:9
  },
  txtS1:{
    textAlign:'center',
    marginTop:'10%',
    color:'#ffffff',
    fontWeight:'bold',
    fontSize: 25
  },
  txtS2:{
    textAlign:'center',
    marginTop:'5%',
    color:'#ffffff',
    fontWeight:'bold',
    marginLeft:'5%'
  },
  txtL1:{
    textAlign:'center',
    marginTop:'10%',
    color:'#ffffff',
    fontWeight:'bold',
    fontSize: 25
  },
  txtL2:{
    textAlign:'center',
    marginTop:'5%',
    color:'#ffffff',
    fontWeight:'bold',
    marginLeft:'5%'
  },
  titulo:{
width:'95%',
height:'10%',
marginBottom:"10%",
marginLeft:'2.5%',
borderRadius:15,
borderColor: '#0E4C59',
borderBottomWidth:2
  },
  txttitulo:{
    fontSize:25,
   textAlign:'center',
    marginTop:'5%',
    color:'#0E4C59',
    marginBottom:'2%'
  }

  })
