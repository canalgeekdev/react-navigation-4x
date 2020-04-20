import React, { Component } from 'react'
import { Text, Image, TextInput, View, StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native'
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SplashComponent({navigation}) {
        return (

            <KeyboardAvoidingView style={styles.container}>

                <StatusBar
                    barStyle="light-content"
                />

                <View style={styles.header}>
                    <Animatable.Image
                        animation="bounceIn"
                        duration={1500}
                        source={require('./assets/logo.png')}
                        style={styles.logo}
                    />
                </View>

                <Animatable.View style={styles.footer}
                    animation="bounceInUp"
                    duration={1000}
                >

                    <TextInput 
                        style={styles.textInput}
                        placeholder="Digite seu email ..."
                    />

                    <TextInput 
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholder="Digite sua senha ..."
                    />

                    <TouchableOpacity
                        onPress={ () => navigation.navigate("HomeScreen") }
                        style={styles.btnLogin}
                    >
                        <Text style={styles.textLogin}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => navigation.navigate("SignUpScreen") }
                        style={styles.btnNewUser}
                    >
                        <Text style={styles.textLogin}>Ainda não tem cadastro?</Text>
                    </TouchableOpacity>

                </Animatable.View>

            </KeyboardAvoidingView>
        )
}

var styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#2c3e50",
    },
    logo: {
        width: 160,
        height: 160,
        borderRadius: 80,
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 50
    },
    btnLogin: {
        marginTop: 10,
        width: 250,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c3e50",
        borderRadius: 20,

    },
    btnNewUser: {
        marginTop: 10,
        width: 250,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1c40f",
        borderRadius: 20,

    },
    textLogin: {
        color: "#FFF",
        fontSize: 14,
        fontWeight: "bold",
    },
    textInput: {
        width: 250,
        height: 40,
        borderBottomColor: "#ecf0f1",
        borderBottomWidth: 1,
        marginBottom: 10,
    }
})