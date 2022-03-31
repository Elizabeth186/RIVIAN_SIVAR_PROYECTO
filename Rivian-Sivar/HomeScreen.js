import React, { useCallback } from "react";
import { Text, View, TouchableOpacity, StyleSheet,
  Image, Dimensions, Animated, StatusBar, ScrollView, Button, Linking, TabBarIOSItem } from 'react-native'
import Navigation from './Navigation';
import UserContext from './UserContext';



const HomeScreen =(props) => {
return (
    <UserContext.Provider value={props.authData}>
      <Navigation {...props}/>
    </UserContext.Provider>
)
}
export default HomeScreen
 
  



