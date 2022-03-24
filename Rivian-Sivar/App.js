import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';



function Splash({navigation}){

    setTimeout(()=>{
       navigation.navigate('Home')
            }, 3000);


return(
  <View style={{ alignItems:'center'}}>
      <Image  
       style={{marginTop:'90%', width: 210, height: 140, marginBottom: 15 }}
        source={require("./assets/Logo.png") }/>


  </View>
)

}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="splash" options={{headerShown: false}} component={Splash} />
        <Stack.Screen name="Home" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});