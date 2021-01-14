import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useFonts } from 'expo-font'

import SignUpSvg from '../../assets/sign up.svg';
import styles from './styles';

export default function Register() {

    const [loaded] = useFonts({
        RobotoCondensed: require('../../assets/fonts/RobotoCondensed-Light.ttf')
    })
    if (!loaded) return null;

    return (
        <View style={styles.fist_container}>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <ScrollView
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={true}
                    keyboardShouldPersistTaps={'always'}

                >
                    <View style={styles.container}>
                        <SignUpSvg width={315} height={230} />
                        <Text style={[styles.text_sign, { fontFamily: 'RobotoCondensed' }]}>Sign Up</Text>
                        <View style={styles.container_input}>
                            <Text style={[styles.text_input,
                            { fontFamily: 'RobotoCondensed', marginTop: 31, marginRight: 265 }
                            ]}>E-mail</Text>
                            <View style={styles.input}>
                                <TextInput keyboardType={'email-address'} />
                            </View>
                            <Text style={[styles.text_input, { fontFamily: 'RobotoCondensed', marginTop: 42 }]}>Password</Text>
                            <View style={styles.input}>
                                <TextInput secureTextEntry />
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                <Text style={[styles.text_button, { fontFamily: 'RobotoCondensed' }]}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}