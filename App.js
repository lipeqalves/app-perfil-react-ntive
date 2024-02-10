//import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjetoPerfil from './page/ProjetoPerfil'
import Home from './page/Home';
import ProjetoParaty from "./page/ProjetoParaty";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Projeto Perfil" component={ProjetoPerfil} />
        <Stack.Screen name="Projeto Paraty" component={ProjetoParaty} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }