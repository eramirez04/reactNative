import {Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import RegistroExpo from "./RegistroExpo";

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
        <View style={styles.vista}>
            <View>
                <Text style={{fontSize: 22, paddingBottom: 90 }}>Registros alamacenados con asyncStorage</Text>
            </View>

            <View>
                <Text style={styles.user}>nombre : </Text>
                <Text style={styles.getInput}>{storedNombre}</Text>
                <Text style={styles.user}>nombre : </Text>
                <Text style={styles.getInput}>{storedUsuario}</Text>
                <Text style={styles.user}>nombre : </Text>
                <Text style={styles.getInput}>{storedTelefono}</Text>
                <Text style={styles.user}>nombre : </Text>
                <Text style={styles.getInput}>{storedClave}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    vista:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 550,
        width: '100%',
        backgroundColor: "white",
        borderRadius: 8,
        paddingVertical: 25,
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    user:{
        fontSize: 29,
        paddingBottom: 5,
        paddingTop: 18,
    },
    getInput:{
        paddingLeft: 120,
        borderBottomColor: 'red'
    },
})

export default RegistroReact;