import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    fisrt_container:{
        flex: 1,
        backgroundColor: '#C6C2DF'
    },
    container: {
        marginTop: Constants.statusBarHeight + 43,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_signin:{
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
    textinput_container:{
        alignItems: 'center',
        backgroundColor: '#6C63FF',
        width: '100%',
        height: Dimensions.get('window').height -330,
        borderTopLeftRadius: 73,
        marginTop: 25 
    },
    text_input:{
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: 0.09,
        marginRight: 240
    },
    input: {
        width: Dimensions.get('window').width -48,
        marginLeft: 6,
        marginTop: 7,
        borderBottomWidth: 1,
        borderBottomColor: '#000' 
    },
    button:{
        backgroundColor: '#C6C2DF',
        borderRadius: 8,
        borderColor: '#000',
        borderWidth: 2,
        marginTop: 55,
        marginBottom: 55,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width -120,
        height: 51
    },
    text_button:{
        fontSize: 34,
        lineHeight: 39,
        letterSpacing: 0.09
    }

})