import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Screen, Navigator } = createStackNavigator();

import LoginAndRegister from './pages/login_and_register';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

export default function Router() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name='LoginAndRegister' component={LoginAndRegister} />
                <Screen name='Register' component={Register} />
                <Screen name='Login' component={Login} />
                <Screen name='Home' component={Home} />
            </Navigator>
        </NavigationContainer>
    )
}