//import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjetoPerfil from './components/ProjetoPerfil'
import Home from './components/Home';
import ProjetoParaty from "./components/ProjetoParaty";
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