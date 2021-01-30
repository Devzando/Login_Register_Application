import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    first_container:{
        flex: 1,
        backgroundColor: '#C6C2DF'
    },
    header:{
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: Constants.statusBarHeight + 16
    },
    voltar:{
        fontSize: 25,
        lineHeight: 37,
        letterSpacing: 0.09,
        fontWeight: 'bold',
        marginLeft: 7
    },
})