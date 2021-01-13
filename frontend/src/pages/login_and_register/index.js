import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { loadAsync, useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Welcome from '../../assets/welcome.svg';

export default function LoginAndRegister(){
    const navigation = useNavigation();

    const [loaded] = useFonts({
        RobotoCondensed: require('../../assets/fonts/RobotoCondensed-Light.ttf'),
    });

    if(!loaded){
        return null;   
    }
        

    return(
        <View style={styles.fist_container}>
            <View style={styles.container}>
                <Welcome width={315} height={230}/>
                <Text style={[styles.text_welcome, {fontFamily: 'RobotoCondensed' }]}>Welcome</Text>
                <View style={styles.container_button}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={[styles.text_button, {fontFamily: 'RobotoCondensed'}]}>Sign in</Text>
                    </TouchableOpacity>
                    <Text style={[styles.text_ou, {fontFamily: 'RobotoCondensed'}]}>Ou</Text>
                    <TouchableOpacity
                        style={[styles.button, {marginTop: 13}]}
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={[styles.text_button, {fontFamily: 'RobotoCondensed'}]}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}