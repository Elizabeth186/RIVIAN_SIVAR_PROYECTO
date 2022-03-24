import React from 'react'
import { KeyboardAvoidingView, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native'


const LoginScreen =() => {
  
    return (
     
          <KeyboardAvoidingView style={styles.container}
          behavior="padding">
              <View style={styles.InputContainer}>
                  <TextInput placeholder='Users'
             
                  style={styles.inputText}/>
                   <TextInput placeholder='Password'
               
                  style={styles.inputText}
                  secureTextEntry/>
                 
              </View>
              <View style={styles.buttonContainer}>
                  <TouchableOpacity
                  onPress={() =>{}}
                  style={styles.button}>
                  <Text style={styles.buttonText}>INICIAR SESION</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={() =>{}}
                  style={styles.button}>
                  <Text style={styles.buttonTextR}>REGISTRARME</Text>
                  </TouchableOpacity>
              </View>
          </KeyboardAvoidingView>     
    )
  }

export default LoginScreen
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})