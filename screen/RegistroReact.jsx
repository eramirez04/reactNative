import {Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

const RegistroReact = () =>{

    const [storedNombre,setNombre] = useState('')
    const [storedUsuario, setUsuairo] = useState('')
    const [storedTelefono, setTelefono] = useState('')
    const [storedClave, setClave] = useState('')

    const recuperarAsync = async () =>{
        try {
            const nombre = await AsyncStorage.getItem('nombre')
            const usuario = await AsyncStorage.getItem('usuario')
            const telefono = await AsyncStorage.getItem('telefono')
            const clave = await AsyncStorage.getItem('clave')

            if (nombre !== null || usuario !== null || telefono !== null || clave !== null){
                setNombre(nombre);
                setUsuairo(usuario);
                setTelefono(telefono);
                setClave(clave)
            }
        }catch (error){
            console.error('Error al recuperar los dato', error)
        }
    }

    useEffect(()=>{
        recuperarAsync()
    },[]);

    return (
        <View>
            <View>
                <Text>Registros alamacenados con asyncStorage</Text>
            </View>

            <View>
                <Text>nombre : {storedNombre}</Text>
                <Text>nombre : {storedUsuario}</Text>
                <Text>nombre : {storedTelefono}</Text>
                <Text>nombre : {storedClave}</Text>
            </View>

        </View>
    );
}



export default RegistroReact;