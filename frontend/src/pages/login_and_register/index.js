import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import WelcomeSvg from '../../assets/Svgs';
import Welcome from '../../assets/welcome.svg';

export default function LoginAndRegister(){
    return(
        <View style={styles.fist_container}>
            <View style={styles.container}>
                <WelcomeSvg />
                <Text style={styles.text_welcome}>Welcome</Text>
                <View style={styles.container_input}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log('hello')}
                    >
                        <Text style={styles.text_button}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.text_ou}>Ou</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log('hello')}
                    >
                        <Text style={styles.text_button}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}