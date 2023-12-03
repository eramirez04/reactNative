import * as SecureStore from 'expo-secure-store'
import {useEffect, useState} from "react";
import {Button, Text, View} from "react-native";

const RegistroExpo = () =>{

    const [storedNombre, setStoredNombre]  =useState('')
    const [storedUsuario, setStoredUsuario]  =useState('')
    const [storedTelefono, setStoredTelefono]  =useState('')
    const [storedClave, setStoredClave]  =useState('')
    useEffect(() => {
        recuperarDatos();
    }, []);
    const recuperarDatos = async ()=>{
        try{
            const storedNombre  = await SecureStore.getItemAsync('nombre')
            const StoredUsuario = await SecureStore.getItemAsync('usuario')
            const storedTelefono  = await SecureStore.getItemAsync('telefono')
            const userClave = await SecureStore.getItemAsync('clave')

            if (storedNombre !== null || StoredUsuario !== null || storedTelefono !== null || userClave !== null){
                setStoredNombre(storedNombre);
                setStoredUsuario(StoredUsuario);
                setStoredTelefono(storedTelefono);
                setStoredClave(userClave)
            }
        }catch (error){
            console.error('error al recuperar los datos', error);
        }
    }

    return (
        <View>
            <View>
                <Text>Nombre : {storedNombre}</Text>
                <Text>Usuario: {storedUsuario}</Text>
                <Text>Telefono:{storedTelefono} </Text>
                <Text>Clave: {storedClave}</Text>
            </View>
        </View>
    );
}
export default RegistroExpo;