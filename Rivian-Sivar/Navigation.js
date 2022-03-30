import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {text, Dimensions} from 'react-native';
import Home from './Home';
import AboutRivian from './AboutRivian';
import Services from './Services';
import Sucursales from './Sucursales';


const fullScreenWidth = Dimensions.get('window').width;

const Stack = createNativeStackNavigator();

// function ModelsStackScreen( ){
//     return(
//         <Stack.Navigator >
//             <Stack.Screen name = 'Models' component= {Models}/>
//         </Stack.Navigator>
//     )
// }

// function AboutRiviansStackScreen( ){
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name = 'AboutRivian' component= {AboutRivian}/>
//         </Stack.Navigator>
//     )
// }
// function ServicesStackScreen( ){
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name = 'Services' component= {Services}/>
//         </Stack.Navigator>
//     )
// }

// function SucursalesStackScreen( ){
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name = 'Sucursales' component= {Sucursales}/>
//         </Stack.Navigator>
//     )
// }

const Tab  = createBottomTabNavigator();

export default function Navigation(props){
    return (

            <Tab.Navigator 
                style={screenOptions.tabBarStyle}>
                <Tab.Screen name= 'Home' component={Home} options={{ headerShown: false }}/>
                <Tab.Screen name= 'AboutRivian' component={AboutRivian} options={{ headerShown: false }}/>
                <Tab.Screen name= 'Services' component={Services} options={{ headerShown: false }}/>
                <Tab.Screen name= 'Sucursales' component={Sucursales} options={{ headerShown: false }}/>
            </Tab.Navigator>


    )
}

const screenOptions = {
    tabBarStyle:{
        backgroundColor:'#0000ff',
        height:100,
        width: fullScreenWidth
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
}