import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Capa from './assets/background.jpg';
import Foto from './assets/perfil.jpg';
export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.capa}  source={Capa}/>
      <View style={styles.boxPerfil}>
        <Image style={styles.foto} source={Foto}/>
        <Text style={styles.titulo}>Robô Dev X-42</Text>
        <Text style={styles.info}>
          Com linhas de código como seu DNA, o Robô Deconteudov X-42 é uma criação única,
          dotada de inteligência artificial avançada e uma paixão inigualável pela programação. 
          Seus olhos digitais brilham com algoritmos inovadores, enquanto
          seus braços mecânicos tecem o futuro da tecnologia com cada linha de código que cria.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  capa:{
    flex:1,
    width:500,
    height:200,
  },
  boxPerfil:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto:{
    width:120,
    height:120,
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom:10,
  },
  titulo:{
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  info:{
    textAlign:'center',
    marginHorizontal: 15,
    fontSize: 16,
  }
});
