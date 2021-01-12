import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Screen, Navigator } = createStackNavigator();

import LoginAndRegister from './pages/login_and_register';


export default function Router() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name='LoginAndRegister' component={LoginAndRegister} />
            </Navigator>
        </NavigationContainer>
    )
}