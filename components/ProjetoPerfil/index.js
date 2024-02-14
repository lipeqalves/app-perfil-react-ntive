
import { Text, View, Image } from 'react-native';
import Capa from '../../assets/background.jpg';
import Foto from '../../assets/perfil.jpg';

import styles from './styles';

export default function ProjetoPerfil() {
    return (
        <View style={styles.container}>
            <Image style={styles.capa} source={Capa} />
            <View style={styles.boxPerfil}>
                <Image style={styles.foto} source={Foto} />
                <Text style={styles.titulo}>Robô Dev X-42</Text>
                <Text style={styles.info}>
                    Com linhas de código como seu DNA, o Robô Deconteudov X-42 é uma criação única,
                    dotada de inteligência artificial avançada e uma paixão inigualável pela programação.
                    Seus olhos digitais brilham com algoritmos inovadores, enquanto
                    seus braços mecânicos tecem o futuro da tecnologia com cada linha de código que cria.
                </Text>
            </View>
        </View>
    );
}