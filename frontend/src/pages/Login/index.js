import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

import { submitLogin } from '../../services/Submits';

import styles from './styles';
import SvgSignin from '../../assets/sign in.svg';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();


    const [loaded] = useFonts({
        RobotoCondensed: require('../../assets/fonts/RobotoCondensed-Light.ttf')
    })
    if (!loaded) return null;

    return (
        <View style={styles.fisrt_container}>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding': 'height' }>
                <ScrollView
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={true}
                    keyboardShouldPersistTaps={'always'}
                >

                    <View style={styles.container}>
                        <SvgSignin width={315} height={230} />
                        <Text style={[styles.text_signin, { fontFamily: 'RobotoCondensed' }]}>Sign in</Text>
                        <View style={styles.textinput_container}>
                            <Text style={[styles.text_input,
                            { fontFamily: 'RobotoCondensed', marginTop: 31, marginRight: 265 }
                            ]}>E-mail</Text>
                            <View style={styles.input}>
                                <TextInput 
                                    keyboardType={'email-address'}
                                    onChangeText={(text) => setEmail(text)}
                                />
                            </View>
                            <Text style={[styles.text_input, { fontFamily: 'RobotoCondensed', marginTop: 42 }]}>Password</Text>
                            <View style={styles.input}>
                                <TextInput 
                                    secureTextEntry
                                    onChangeText={(text) => setPassword(text)}
                                />
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => submitLogin(email, password, navigation)}
                            >
                                <Text style={[styles.text_button, { fontFamily: 'RobotoCondensed' }]}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}