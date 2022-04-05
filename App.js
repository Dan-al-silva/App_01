import * as React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
    
      <Text style={estilo.titulo} > Praias Lindas Do Brasil </Text>
      <Text style={estilo.frase}>Minhas Ferias... </Text>
      <ScrollView style={estilo.fotos}>
       <Text style={estilo.titulo}>Praia Grande</Text>
      <Image style={estilo.img} source={require("./assets/Praia01.jpg")}/>
      <Text style={estilo.titulo}>Prainha SP</Text>
      <Image style={estilo.img} source={require("./assets/Praia02.jpg")}/>
      <Text style={estilo.titulo}> Praia de Guarujá</Text>
      <Image style={estilo.img} source={require("./assets/Praia03.jpg")}/>
      <Text style={estilo.titulo}> Praia de Santos</Text>
      <Image style={estilo.img} source={require("./assets/Praia04.jpg")}/>
      </ScrollView>
    </View>
    
  );
}

const estilo = StyleSheet.create({
container:{
flex:1,
backgroundColor:'#AED6F1'


},
titulo:{
fontSize:22,
textAlign:"center",
marginTop:40,
marginBottom:20,
fontWeight:"bold",
color:'#5A1125',
backgroundColor:'white',
borderRadius:100,
width:290,



},
frase:{
fontSize:15,
marginBottom:20,
textAlign:"left",
fontWeight:"bold",
color:'#BFCADE',
backgroundColor:'#7F99CB',
borderRadius:100,
paddingLeft:25,
width:150
},

img:{
width:300,
height:300,
borderRadius:15,
borderStyle:'solid',
borderBottomwidth:'10px',
borderColor:'white',

},
legenda:{

},
fotos:{
  alignItems:"center",

}

});