import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React ,{useState} from "react";
import * as SecureStore  from 'expo-secure-store'

const AlmacenarExpo = ({navigation}) => {


  const [nombre,setNombre] = useState("");
  const [Usuario,setUsuario] = useState("");
  const [telefono, setTelefon] = useState("");
  const [clave, setClave] = useState("");

  const guardarDatos = async () =>
  {
    try{
     await SecureStore.setItemAsync('nombre',nombre) 
     await SecureStore.setItemAsync('usuario', Usuario)
     await SecureStore.setItemAsync('telefono',telefono)
     await SecureStore.setItemAsync('clave',clave)
     alert("datos Guardados")
    }catch(error){
      console.error('Error al guardar los datos: ',error)
    }
  }


  return (
    <View style={[styles.vista, styles.shadowProp]}>

      <Text style={styles.title}>Almacenamiento local con expo</Text>

      <View>
        <Text>ingrese Nombres</Text>
        <TextInput placeholder="Nombres" style={styles.input} value={nombre}
        onChangeText={(text)=>setNombre(text)}/>
      </View>

      <View>
        <Text>Usuario</Text>
        <TextInput placeholder="usuario" style={styles.input} value={Usuario}
        onChangeText={(text)=> setUsuario (text)}/>
      </View>

      <View>
        <Text>telefono</Text>
        <TextInput placeholder="Telefono" style={styles.input} value={telefono}
        onChangeText={(text)=> setTelefon (text)}/>
      </View>

      <View>
        <Text>Clave</Text>
        <TextInput placeholder="Contraseña" style={styles.input} secureTextEntry={true} 
        value={clave} onChangeText={(text) => setClave(text)}/>
      </View>

      <Button title="Guardar Datos" onPress={guardarDatos} />

      <View style={{paddingTop: 50}}>
        <Button title={'Ver datos'} onPress={() => navigation.push('RegistroExpo')}/>
      </View>


    </View>


  );
};

const styles = StyleSheet.create({
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
    fontSize: 20,
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
});

export default AlmacenarExpo;
