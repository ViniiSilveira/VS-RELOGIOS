import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../Welcome';
import Login from '../Login';
import Cadastro from '../Cadastro';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >

        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}