//import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjetoPerfil from './page/ProjetoPerfil'
import Home from './page/Home';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Projeto Perfil" component={ProjetoPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }