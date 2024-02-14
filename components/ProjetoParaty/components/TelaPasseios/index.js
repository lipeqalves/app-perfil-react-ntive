import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './styles';

import passeio01 from '../../../../assets/imgProjetoParaty/passeios/passeio01.png';
import passeio02 from '../../../../assets/imgProjetoParaty/passeios/passeio02.png';
import passeio03 from '../../../../assets/imgProjetoParaty/passeios/passeio03.png';
export default function TelaPasseios() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Passeios em Paraty</Text>
      <Text style={styles.descricao}>
      O município de Paraty está quase inteiro em área de parques
       e de preservação ambiental. Muitas são as opções de passeios para 
       quem curte a natureza: passeios de jeep, 
      de bike, caminhadas por trilhas entre outros. Veja dois exemplos:
      </Text>
      <View style={styles.card}>
        <Text style={styles.tituloCard}>Tirolesa</Text>
        <Image source={passeio01} style={styles.img}/>
      </View>
      <View style={styles.card}>
        <Text style={styles.tituloCard}>Rafting</Text>
        <Image source={passeio02} style={styles.img} />
      </View>
      <View style={styles.card}>
        <Text style={styles.tituloCard}>Canoagem no mangue</Text>
        <Image source={passeio03} style={styles.img} />
      </View>
    </View>
  )
}