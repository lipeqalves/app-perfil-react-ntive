import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './components/TelaInicial';
import TelaHospedagem from './components/TelaHospedagem';
import TelaPasseios from './components/TelaPasseios';
import TelaRestaurantes from './components/TelaRestaurantes';


const Stack = createStackNavigator();


export default function ProjetoParaty() {
  return (
      <NavigationContainer independent={true}>  
      {/*//adicione a propriedade independent={true} ao NavigationContainer interno para torná-lo independente do NavigationContainer pai.  */}
          <Stack.Navigator>
              <Stack.Screen name="Tela Inicial" component={TelaInicial} />
              <Stack.Screen name="Tela Hospedagem" component={TelaHospedagem} />
              <Stack.Screen name="Tela Passeios" component={TelaPasseios} />
              <Stack.Screen name="Tela Restaurantes" component={TelaRestaurantes} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}