import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './styles';

import hospedagem01 from '../../../../assets/imgProjetoParaty/hospedagens/hospedagem01.png'
import hospedagem02 from '../../../../assets/imgProjetoParaty/hospedagens/hospedagem02.png'
import hospedagem03 from '../../../../assets/imgProjetoParaty/hospedagens/hospedagem03.png'
export default function TelaHospedagem() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pousadas e Hotéis em Paraty</Text>
      <Text style={styles.descricao}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>
      <View style={styles.card}>
        <Image source={hospedagem01} style={styles.img}/>
        <Text style={styles.tituloCard}>Pousada Missanga</Text>
        <Text>Valor médio: R$ 350,00</Text>
        <Text>Localização: Próx. à Av. Roberto Silveira</Text>
      </View>
      <View style={styles.card}>
        <Image source={hospedagem02} style={styles.img} />
        <Text style={styles.tituloCard}>Pousada Morro do Forte</Text>
        <Text>Valor médio: R$ 450,00</Text>
        <Text>Localização: Próximo à Praia - Pontal</Text>
      </View>
      <View style={styles.card}>
        <Image source={hospedagem03} style={styles.img} />
        <Text style={styles.tituloCard}>Pousada Porto Imperial</Text>
        <Text>Valor médio: R$ 550,00</Text>
        <Text>Localização: Centro Histórico</Text>
      </View>
    </View>
  )
}