import { Alert } from 'react-native';

import api from '../services/api';

export async function submit(email, password, navigation) {
    const data = { email, password };

    try {
        await api.post('/register', data);
        Alert.alert(
        'Concluido', 
        'Registro realizado com sucesso. Prossiga para a tela de login e acesse sua conta.',
        [{text: 'OK', onPress: () => navigation.navigate('Login')}]
        );
    } catch (error) {
        console.log(error);
        return Alert.alert('Ocorreu algum error, tente novamente.');
    }
}