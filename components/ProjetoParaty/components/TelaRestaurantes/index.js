import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './styles';
import reataurante01 from '../../../../assets/imgProjetoParaty/restaurantes/restaurante01.png'
import reataurante02 from '../../../../assets/imgProjetoParaty/restaurantes/restaurante02.png'
import reataurante03 from '../../../../assets/imgProjetoParaty/restaurantes/restaurante03.png'
export default function TelaRestaurantes() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bares e Restaurantes</Text>
      <Text style={styles.descricao}>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.</Text>
      <View style={styles.boxImg}>
        <Image source={reataurante01} style={styles.img}/>
        <Text style={styles.tituloBoxImg}>Armazén Mar</Text>
        <Text>Localização: Rod Rio - Santos</Text>
      </View>
      <View style={styles.boxImg}>
        <Image source={reataurante02} style={styles.img} />
        <Text style={styles.tituloBoxImg}>Bendita's Restaurante</Text>
        <Text>Localização: Centro Histórico</Text>
      </View>
      <View style={styles.boxImg}>
        <Image source={reataurante03} style={styles.img} />
        <Text style={styles.tituloBoxImg}>SEREIA DO MAR PIZZA - BAR</Text>
        <Text>Localização: Praia do Jabaquara</Text>
      </View>
    </View>
  )
}




