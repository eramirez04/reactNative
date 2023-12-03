import * as SecureStore from 'expo-secure-store'
import {useEffect, useState} from "react";
import {Button, Text, View,StyleSheet   } from "react-native";

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
        <View style={[styles.vista, styles.shadowProp]}>
            <View>
                <Text style={{fontSize: 20, paddingBottom: 40}}> Registro de traidos con la libreria AsynStorage</Text>
            </View>
            <View>
                <Text style={styles.user}>Nombre :</Text>
                <Text style={styles.getInput}> {storedNombre}</Text>
                <Text style={styles.user}>Usuario: </Text>
                <Text style={styles.getInput}>{storedUsuario}</Text>
                <Text style={styles.user}>Telefono: </Text>
                <Text style={styles.getInput}>{storedTelefono}</Text>
                <Text style={styles.user}>Clave:</Text>
                <Text style={styles.getInput}> {storedClave}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    vista:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 450,
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
});
export default RegistroExpo;