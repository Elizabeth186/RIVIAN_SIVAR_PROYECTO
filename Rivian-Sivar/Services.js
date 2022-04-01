import React from 'react';
import { SafeAreaView, Text, TouchableOpacity,View,Image, StyleSheet } from 'react-native';

const Services =() => {



  return (
        <SafeAreaView style={styles.container}>
      <View style={styles.titulo}>
      <Text style={styles.txttitulo}>Conoce mas sobre
      nuestros servicios</Text>
      </View>
      <View style={styles.viewservices1} >
        <TouchableOpacity style={styles.local1}>
            <View style={{flexDirection:'column'}}>
          <Text style={styles.txt}>Seguros</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.viewservices2} >
        <TouchableOpacity style={styles.local1}>
           <View style={{flexDirection:'column'}}>
          <Text style={styles.txt}>Talleres</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.viewservices3} >
        <TouchableOpacity style={styles.local1}>
           <View style={{flexDirection:'column'}}>
          <Text style={styles.txt}>Estaciones de Recarga</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.viewservices4} >
        <TouchableOpacity style={styles.local1}>
           <View style={{flexDirection:'column'}}>
          <Text style={styles.txt}>Repuestos</Text>
          </View>
        </TouchableOpacity>
      </View> 
    </SafeAreaView>
  )
}
    

export default Services
const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems:'center',
  alignContent:'center',
  backgroundColor:'#ffffff'
},
viewservices1:{
  padding:10,
  alignItems:'center',
  marginLeft:'10%',
  marginRight:'10%',
  marginTop:'15%',
  borderColor:'#0E4C59',
  borderWidth:1,
  backgroundColor:'#ffffff',
  width:'80%',
  height:'10%',
  borderRadius:13,
  elevation:10
},
viewservices2:{
  padding:14,
  alignItems:'center',
  marginLeft:'10%',
  marginRight:'10%',
  marginTop:'8%',
  borderColor:'#0E4C59',
  borderWidth:1,
  backgroundColor:'#ffffff',
  width:'80%',
  height:'10%',
  borderRadius:13,
  elevation:10
},viewservices3:{
  alignItems:'center',
  marginLeft:'10%',
  marginRight:'10%',
  marginTop:'8%',
  borderColor:'#0E4C59',
  borderWidth:1,
  backgroundColor:'#ffffff',
  width:'80%',
  height:'10%',
  borderRadius:13,
  elevation:10
},viewservices4:{
  padding:14,
  alignItems:'center',
  marginLeft:'10%',
  marginRight:'10%',
  marginTop:'8%',
  borderColor:'#0E4C59',
  borderWidth:1,
  backgroundColor:'#ffffff',
  width:'80%',
  height:'10%',
  borderRadius:13,
  elevation:10
},
txt:{
  textAlign:'center',
  marginTop:'7%',
  color:'black',
  fontWeight:'bold',
  fontSize: 25,
  height:'100%'
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
      marginTop:'5%',
      color:'#0E4C59',
      textAlign:'center'
  
    }
})