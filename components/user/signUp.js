// components/signup.js

import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase';


export default class Signup extends Component {

    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password1: '',
            password2: '',
            isLoading: false
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    registerUser = () => {
        if (this.state.email === '' && this.state.password1 === '' && this.state.password1 != this.state.password2) {
            Alert.alert('Enter details to signup! Or Please corrrect both your password')
        } else {
            this.setState({
                isLoading: true,
            })
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password1)
                .then((res) => {
                    res.user.updateProfile({
                        displayName: this.state.displayName
                    })
                    console.log('User registered successfully!')
                    this.setState({
                        isLoading: false,
                        displayName: '',
                        email: '',
                        password1: '',
                        password2: ''

                    })
                    this.props.navigation.navigate('TabNavigator')
                })
                .catch(error => this.setState({ errorMessage: error.message }))
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Name"
                    value={this.state.displayName}
                    onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={(val) => this.updateInputVal(val, 'email')}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Password"
                    value={this.state.password1}
                    onChangeText={(val) => this.updateInputVal(val, 'password1')}
                    maxLength={15}
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Confirm Password"
                    value={this.state.password2}
                    onChangeText={(val) => this.updateInputVal(val, 'password2')}
                    maxLength={15}
                    secureTextEntry={true}
                />
                <Button
                    color=""
                    title="Sign Up"
                    onPress={() => this.registerUser()}
                />

                <Text
                    style={styles.loginText}
                    onPress={() => this.props.navigation.navigate('Login')}>
                    Already Registered? Click here to login
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: 'rgb(173, 161, 170)'
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
    },
    loginText: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: 'center'
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});