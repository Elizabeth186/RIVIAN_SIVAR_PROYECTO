import React, { useCallback } from "react";
import { Text, View, TouchableOpacity, StyleSheet,
  Image, Dimensions, Animated, StatusBar, ScrollView, Button, Linking, TabBarIOSItem } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { auth } from './firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from "expo-linear-gradient";
import { Constants } from 'expo';

// arrglo de imagenes
const imagenes = [
  
  "https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/277720857_100995932581765_2829213241870941392_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=hLj2Xi1rrzQAX_vtPZ5&_nc_ht=scontent.fsal2-1.fna&oh=00_AT8ZdT2yeJmHjC4fAJFhhISwwdeTYVsxuR6ORYoRxrODpw&oe=624A78EB",
  "https://scontent.fsal3-1.fna.fbcdn.net/v/t39.30808-6/277677565_100995885915103_2667303007069290449_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=UAQxP2HOg6QAX_eGvEc&_nc_ht=scontent.fsal3-1.fna&oh=00_AT8b6oT3ziG7MDqfl4G_6w344kvBtEzwafgMCcY_iBDHOw&oe=6249991B",
  "https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/277723457_100995905915101_960760174018062666_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=iZyufFRRz_IAX-vj0sL&tn=94r7wMOG4VBOU18E&_nc_ht=scontent.fsal2-1.fna&oh=00_AT8-jw8jP-uDappXAmtnGgBh3dRgsgLIb7U-k_0ekYBu9A&oe=624939B1",
  "https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/277734474_100995962581762_7548344566621942817_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=z7FfDc2vfLIAX-EZ4CO&_nc_ht=scontent.fsal2-1.fna&oh=00_AT9-x1HgpEl1qGPhKHmRuj_v8vz2XPfUReIvkj8r5IGigA&oe=6248C374",
];
// colocando dimensiones
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
// declarando caracteristicas del contenedor de imagen
const ancho_del_contenedor= width * 0.7;
// indicando las imagenes visibles en la pantalla
const espacio_contenedores = (width -ancho_del_contenedor) / 2;
const espacio = 4;
const altura_imagen_fondo = height;
// funcion para funcionamiento de carrusel
function CrearCarrusel({ scrollX }) {
  return (
    <View
      style={[
        {
          position: "absolute",
          height: altura_imagen_fondo,
          top: 0,
          width: width,
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      {imagenes.map((imagen, index) => {
        const inputRange = [
          (index - 1) * ancho_del_contenedor,
          index * ancho_del_contenedor,
          (index + 1) * ancho_del_contenedor,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.Image
            key={index}
            source={{ uri: imagen }}
            style={[
              { width: width, height: altura_imagen_fondo, opacity },
              StyleSheet.absoluteFillObject,
            ]}
          />
        );
      })}
      {/* colocando efecto gradiente */}
      <LinearGradient
        colors={["transparent", "white"]}
        style={{
          width,
          height:altura_imagen_fondo,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
}



export default function  HomeScreen() {
  const scrollX = React.useRef(new Animated.Value(2)).current;
  const navigation = useNavigation()

  const SignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message)) }

  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width:"100%", height:'100%'}}>
      <StatusBar hidden />
      <CrearCarrusel scrollX={scrollX} />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        // indicando salida del carrusel
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          paddingTop: 100,
          paddingHorizontal: espacio_contenedores,
        }}
        snapToInterval={ancho_del_contenedor}
        decelerationRate={0}
        data={imagenes}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ancho_del_contenedor,
            index * ancho_del_contenedor,
            (index + 1) * ancho_del_contenedor,
          ];
// Altura de la animacon
          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -30, 0],
          });
          return (
            <View style={{ width: ancho_del_contenedor }}>
              <Animated.View
                style={{
                  marginHorizontal: espacio,
                  padding: espacio,
                  borderRadius: 30,
                  backgroundColor: "'#0E4C59",
                  alignItems: "center",
                  transform: [{ translateY: scrollY }],
                }}
              >
                <Image source={{ uri: item }} style={styles.posterImage} />
              </Animated.View>
            </View>
          );
        }}
      />
      
      <View style={styles.Recargar}>
        <Text style={styles.textsuperior}>¿NO SABES DONDE</Text>
        <Text style={styles.textinferior}>RECARGAR TU AUTO ELECTRICO?</Text>
      </View>
      <View style={styles.viewrecargas}>
        <Text style={styles.textDepartamento}>Santa Tecla, San Salvador</Text>
      </View>
      <View style={styles.santatecla}>
      <TouchableOpacity style={styles.santatecla1}  onPress={ ()=>{ Linking.openURL('https://goo.gl/maps/ckdPmkBWTBuDDLiz7')}}>
        <Text style={styles.txtsantatecla1}>Texaco La Skina</Text>
        <Image style={styles.images}
            source={require("./assets/station.png")  }/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.santatecla1}  onPress={ ()=>{ Linking.openURL('https://g.page/PlazaMalta?share')}}>
        <Text style={styles.txtsantatecla2} >Plaza Malta</Text>
        <Image style={styles.images}
            source={require("./assets/electrics.png")  }/>
      </TouchableOpacity>
    </View>
    <View style={styles.viewrecargas2}>
        <Text style={styles.textDepartamento}>Santa Ana, San Salvador</Text>
      </View>
    <View style={styles.santana} >
    <TouchableOpacity style={styles.santaana1}  onPress={ ()=>{ Linking.openURL('https://goo.gl/maps/GqVcDwjwJspEX3H1A')}}>
        <Text style={styles.txtCasaverde}>Hotel Casa Verde</Text>
        <Image style={styles.images}
            source={require("./assets/electrics.png")  }/>
      </TouchableOpacity>
    </View>
     <View >
     <TouchableOpacity style={styles.btn}
       onPress={SignOut}>
       <Text>Cerrar Sesion</Text>
     </TouchableOpacity>
  </View>
  </ScrollView>
</SafeAreaView>
  )
}
    
const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems:'center',
  alignContent:'center',
},
Recargar:{
borderColor: '#0E4C59',
borderWidth: 3,
height: '8%',
width:'90%',
marginTop:'10%',
marginLeft:'5%',
alignItems:'center',
borderRadius:12
},
textsuperior:{
fontSize: 25,
borderTopLeftRadius:5,
borderTopRightRadius:5,
backgroundColor:'#0E4C59',
width:'100%',
color:'#ffffff',
textAlign:'center'
},
textinferior:{
fontSize:16,
color:'#307B8C'
},
 posterImage: {
  width: "100%",
  height: ancho_del_contenedor * 1.2,
  resizeMode: "cover",
  borderRadius: 20,
  marginBottom:'15%'
 
},
viewrecargas:{
  alignItems:'center',
  borderColor:'#307B8C',
  borderWidth:0.5,
  marginTop:'5%',
  marginBottom:'5%',
  width:'97%',
  backgroundColor:'#307B8C',
  borderBottomRightRadius:15,
  borderTopRightRadius:15,
  elevation: 2
},
viewrecargas2:{
  marginLeft:'3%',
  borderColor:'#307B8C',
  borderWidth:0.5,
  marginTop:'5%',
  marginBottom:'5%',
  width:'97%',
  backgroundColor:'#307B8C',
  borderBottomLeftRadius:15,
  borderTopLeftRadius:15,
  elevation: 2
},
      santaana1:{
        backgroundColor:'#8EBF24',
        width:'30%',
        height:'100%',
        borderColor:'#0E4C59',
        borderWidth:2,
        borderRadius:15,
        alignItems:'center',
        elevation:20
        },
        santana:{
          width:"100%",
          alignItems:'center',
          marginTop:"5%",
          height:'8%'
        },
        txtCasaverde:{
          marginTop:'5%',
          marginRight:'3%',
          textAlign:'center',
          color:'#0E4C59'
        },
        images:{
          padding:12,
          height: '50%',
          width:'30%',
          marginTop:'5%'
        },
        santatecla:{
          height:'8%',
          width:'100%',
          flexDirection:'row',
          alignSelf:'center',
          alignContent:'center',
          alignItems:'center',
          
          },
          santatecla1:{
          alignItems:'center',
            backgroundColor:'#8EBF24',
            width:'30%',
            height:'100%',
            borderColor:'#0E4C59',
            borderWidth:2,
            borderRadius:15,
            marginLeft:'12%',
            elevation:20
            },
      txtsantatecla1:{
        marginTop:'5%',
        marginRight:'6%',
        textAlign:'center',
        color:'#0E4C59'
      },
      txtsantatecla2:{
        marginTop:'5%',
        marginRight:'6%',
        color:'#0E4C59'
      
      },
      textDepartamento:{
        fontSize:25,
        color:'#ffffff',
        textAlign:'center'
      }
      
        

})



