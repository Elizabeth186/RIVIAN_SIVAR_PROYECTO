import React from 'react';
import { SafeAreaView,ScrollView, Text,View,Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { auth } from './firebase';

const AboutRivian =() => {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
 <View style={styles.titulo}>
      <Text style={styles.txttitulo}>SUCURSALES</Text>
      </View>
      <ScrollView style={styles.scrollviewestyle}>
<View style={styles.images}>
<Image style={styles.img1}
              source={require("./assets/taller.png")  }/>
<Button color={'#0E4C59'} 
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Caracteristicas', { name: 'Caracteristicas' })
      }
    />
<Image style={styles.img1}
              source={require("./assets/taller.png")  }/>
<Button color={'#0E4C59'}
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Caracteristicas', { name: 'Caracteristicas' })
      }
    />
     
<Image style={styles.img1}
              source={require("./assets/taller.png")  }/>
<Button color={'#0E4C59'}
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Caracteristicas', { name: 'Caracteristicas' })
      }
    />
      
<Image style={styles.img1}
              source={require("./assets/taller.png")  }/>
<Button color={'#0E4C59'}
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Caracteristicas', { name: 'Caracteristicas' })
      }
    />
<Image style={styles.img1}
              source={require("./assets/taller.png")  }/>
<Button color={'#0E4C59'}
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Caracteristicas', { name: 'Caracteristicas' })
      }
    />
     
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
    

export default AboutRivian
const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems:'center',
},
titulo:{
  width:'100%',
  height:75,
  backgroundColor:'#154C59',
  marginBottom:'5%',
},
txttitulo:{
  fontSize:30,
  width:'100%',
  height:'100%',
  textAlign:'center',
  color:'#ffffff',
  marginTop:'5%',
  fontWeight:'bold'
},
scrollviewestyle:{
  width:510,
  alignContent:'center',
 height:'100%'
},
images:{
  width:'84.8%',
  height:'30%',
  marginLeft:'7%'
},
img1:{
  marginTop:'5%',
  width:432,
  height:250,
  borderTopLeftRadius:12,
  borderTopRightRadius:12
}
})