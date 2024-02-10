import { View, Text, Image, Button } from 'react-native'
import React from 'react'

import img from '../../../../assets/imgProjetoParaty/01.png'
import styles from './styles';

export default function TelaInicial(props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Paraty</Text>
        <Text style={styles.texto}>Saiba o que visitar em paraty.</Text>
        <Image source={img} style={styles.img}></Image>
        <View style={styles.cardBtn}>
          <Button
            color="#372d00"
            title="Ver Hospedagem"
            onPress={
              () => { props.navigation.navigate('Tela Hospedagem') }
            }
          />
        </View>
        <View style={styles.cardBtn}>
          <Button
            color="#372d00"
            title="Ver Passeios"
            onPress={
              () => { props.navigation.navigate('Tela Passeios') }
            }
          />
        </View>
        <View style={styles.cardBtn}>
          <Button
            color="#372d00"
            title="Ver Restaurantes"
            onPress={
              () => { props.navigation.navigate('Tela Restaurantes') }
            }
          />
        </View>
    </View>
    </View>
  )
}