import { StyleSheet, Dimensions } from 'react-native';
import constants from 'expo-constants';


export default StyleSheet.create({
    fist_container:{
        flex: 1,
        backgroundColor: '#C6C2DF'
    },
    container:{
        marginTop: constants.statusBarHeight + 43,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_welcome:{
        fontSize: 48,
        lineHeight: 55,
        letterSpacing: 0.09,
        textShadowColor: 'rgba(0, 0, 0, 0.28)',
        textShadowOffset: {width: 4, height: 4},
        textShadowRadius: 4,
        color: '#0E00F3',
        opacity: 0.74,
        marginTop: 22
    },
    container_button:{
        backgroundColor: '#6C63FF',
        borderTopLeftRadius: 101,
        borderTopRightRadius: 101,
        width: '100%',
        height: Dimensions.get('window').height -390,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'

    },
    button:{
        backgroundColor: '#C6C2DF',
        borderRadius: 8,
        borderColor: '#000',
        borderWidth: 2,
        marginTop: 55,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width -120,
        height: 51
    },
    text_button:{
        fontSize: 28,
        lineHeight: 39,
        letterSpacing: 0.09
    },
    text_ou:{
        fontSize: 25,
        lineHeight: 29,
        marginTop: 13
    }
})
