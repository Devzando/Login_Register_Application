import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from './api';

export async function submitRegister(email, password, navigation) {
    const data = { email, password };

    try {
        await api.post('/register', data);
        Alert.alert(
        'Concluído', 
        'Registro realizado com sucesso. Prossiga para a tela de login e acesse sua conta.',
        [{text: 'OK', onPress: () => navigation.navigate('Login')}]
        );
    } catch (error) {
        console.log(error);
        return Alert.alert('Ocorreu algum error, tente novamente.');
    }
}

export async function submitLogin(email, password, navigation){
    const data = {email, password};
    try {
        const response = await api.post('/login', data);
        await AsyncStorage.setItem('email', response.data.email);
        navigation.navigate('Home');
    } catch (error) {
        console.log(error);
    }
}