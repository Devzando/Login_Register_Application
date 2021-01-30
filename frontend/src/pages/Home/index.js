import React, { useEffect, useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Lottie from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';


import styles from './styles';

export default function Home() {
    const [isplay, setIsPlay] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        async function alertmessage() {
            const email = await AsyncStorage.getItem('email');
            Alert.alert(
                'Concluído',
                `Parabéns ${email}!! Você chegou ao final.`,
                [{ text: 'OK', onPress: () => setIsPlay(true) }]
            );
        }
        alertmessage();
    }, [])

    const [loaded] = useFonts({
        RobotoCondensed: require('../../assets/fonts/RobotoCondensed-Light.ttf')
    })
    if (!loaded) return null;

    return (
        <View style={styles.first_container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign style={styles.icon} name='left' size={30} color='black' />
                </TouchableOpacity>
                <Text style={[styles.voltar, { fontFamily: 'RobotoCondensed' }]}>Voltar</Text>
            </View>
            {isplay ?
                <>
                    <Lottie
                        source={require('../../assets/2469-dino-dance.json')}
                        autoPlay
                        loop
                        style={{ width: 350, alignItems: 'center' }}
                    />
                    <Lottie
                        source={require('../../assets/1708-success.json')}
                        autoPlay
                        loop
                        style={{ width: 200, marginLeft: 38 }}
                    />
                </>
                : null}
            <View style={styles.container}>
            </View>
        </View>
    )
}