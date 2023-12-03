import React, {useState } from "react";
import { View, Text,StyleSheet, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AlmacenarRact = ({navigation}) =>{

    const [inputNombre, setInputNombre] = useState('');
    const [inputUsuario,setInputUsuario] = useState('')
    const [inputTelefono,setInputTelefono] = useState('')
    const [inputClave,setInputClave] = useState('')

    const storedData = async () =>{
        try {
            await AsyncStorage.setItem('nombre',inputNombre)
            await AsyncStorage.setItem('usuario',inputUsuario)
            await AsyncStorage.setItem('telefono',inputTelefono)
            await AsyncStorage.setItem('clave',inputClave)
            alert('Datos Guardados')
        }catch (error){
            console.error('error en guardar Datos', error)
        }
    }

    return (
        <View style={[style.vista, style.shadowProp]}>

        <Text style={style.title}>Almacenamiento local con React </Text>
  
        <View>
          <Text>ingrese su nombre</Text>
          <TextInput placeholder="Nombres" style={style.input} value={inputNombre}
          onChangeText={(text)=>setInputNombre(text)}/>
        </View>
  
        <View>
          <Text>Usuario</Text>
          <TextInput placeholder="usuario" style={style.input} value={inputUsuario}
          onChangeText={(text)=> setInputUsuario(text)}/>
        </View>
  
        <View>
          <Text>telefono</Text>
          <TextInput placeholder="Telefono" style={style.input} value={inputTelefono}
          onChangeText={(text)=> setInputTelefono(text)}/>
        </View>
  
        <View>
          <Text>Clave</Text>
          <TextInput placeholder="Contraseña" style={style.input} secureTextEntry={true} value={inputClave}
          onChangeText={(text) => setInputClave(text)}/>
        </View>
  
        <Button title="Guardar Datos" onPress={storedData} />

            <View>
                <Button title={'Ver Datos'} onPress={() => navigation.push('RegistroReact')}/>
            </View>
      </View>
    );
}

const style = StyleSheet.create({
    vista: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 8,
        paddingVertical: 25,
        paddingHorizontal: 15,
        width: "100%",
        marginVertical: 10,
      },
      vistaDos: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: 320,
        height: 350,
      },
      title: {
        /*   color: "white", */
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 13,
        paddingBottom: 60,
      },
      shadowProp: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      input: {
        height: 40,
        width: 190,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
      },
})


export default AlmacenarRact;