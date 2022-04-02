import React from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModelR from './subscreens/ModelR'
import ModelS from './subscreens/ModelR';
import { useNavigation } from '@react-navigation/core';

const Stack = createNativeStackNavigator();
const Modelos = () =>{
  return(
    <SafeAreaView style={styles.container}>
      <VerModelos/>
      <Stack.Navigator>
        <Stack.Screen name="ModelR"
        component={ModelR}
        options={{ headerShown: false }}/>
         <Stack.Screen name="ModelS"
        component={ModelS} 
        options={{ headerShown: false }}/>
      </Stack.Navigator>
      </SafeAreaView>
  );
}


const VerModelos = () => {
 const navigation = useNavigation()
  return(
    <SafeAreaView style={styles.container}>
        <View><Text style={styles.textStyle1}>RIVIAN R1</Text>
        <Image style={styles.image1} source={require("./assets/r5.jpg")  }/>
         </View>
        <Text style={styles.textStyle2}>Version ET</Text>

        <View style={styles.View2}>
        <View style={styles.View1}>
        <Text style={styles.textStyle3}>PRECIO FINAL:</Text>
        <Text style={styles.textStyle3}>CUOTA: </Text>
        <Text style={styles.textStyle3}>PLAZO: </Text>
        <Text style={styles.textStyle3}>PRIMA:</Text>
        </View>

        <View style={styles.View11}>
        <Text style={styles.textStyle31}>$ 38,890</Text>
        <Text style={styles.textStyle31}>$ 400</Text>
        <Text style={styles.textStyle31}>60 MESES</Text>
        <Text style={styles.textStyle31}>$ 12,000</Text>
        </View>
        </View>
         <TouchableOpacity onPress={ModelR}style={styles.button2}><Text style={styles.buttonText1}>Agendar Cita</Text>
         </TouchableOpacity>
         <View style={styles.View1}></View>
      <View style={styles.View2}></View>
      </SafeAreaView>

      
        

  );
}

    
export default  Modelos 
const styles = StyleSheet.create({
container:{
  flex: 1,
  paddingTop:'20%',
  alignItems: 'center',
},
image1:{
  padding:12,
  height:200,
  width:350,

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
textStyle3:{
  fontSize: 15,
  color: '#606060',
  marginVertical:'10%',
  alignSelf: 'flex-start',
  alignSelf: 'center',
},
textStyle31:{
  fontSize: 15,
  color: '#606060',
  marginTop:'24%',
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
 button2:{
  backgroundColor: ('#0E4C59'),
  width: 200,
  height: 50,
  borderRadius: 11,
  marginTop:'10%',
  alignSelf: 'center',
   },
 buttonText1:{
  textAlign: 'center',
  padding:10,
  color:'white',
  fontSize: 22,
   },
   View1:{
    textAlign: 'center',
    flexDirection: 'column',
    padding:10,
    color:'white',
    fontSize: 22,

     },
     View11:{
      textAlign: 'center',
      flexDirection: 'column',
      padding:10,
      color:'white',
      fontSize: 22,
       },
     View2:{
      textAlign: 'center',
      flexDirection: 'row',
      padding:10,
      color:'white',
      fontSize: 22,
      marginTop:'14%',
       },
     
})