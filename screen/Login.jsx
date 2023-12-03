import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";
import {Text, View, StyleSheet, TextInput, Button, } from "react-native";
import navigationContainer from "@react-navigation/native/src/NavigationContainer";

const Login = ({navigation}) => {
  return (
    <View style={[styles.vista, styles.shadowProp]}>

        <View>
            <Text>ingrese se Usuario</Text>
            <TextInput placeholder="Usuario" style={styles.input} />
        </View>

      <View>
        <Text>Ingrese Contraseña</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Contraseña"/>
      </View>

      <View style={{display: 'flex', gap: 30, paddingTop : 90  }}>
          <Button title="Login" />
          <Button title={'Expo'} onPress={()=> navigation.push('Expo')}/>
          <Button title={'React'} onPress={() => navigation.push('React')} />
      </View>



    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
    vista:{
      padding: 90,
    },
});

export default Login;

