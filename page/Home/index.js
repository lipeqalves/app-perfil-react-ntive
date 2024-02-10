import React from 'react';
import { Text, View, Button } from 'react-native';

import styles from './styles';

export default function Home(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Projetos finais das Misãos do curso de react-native da davmedia
            </Text>

            <View style={styles.boxButton} >
                <Button
                    title="Projeto Perfil"
                    onPress={
                        () => { props.navigation.navigate('Projeto Perfil') }
                    }
                />
            </View>
            <View style={styles.boxButton} >
                <Button
                    title="Projeto Perfil"
                    onPress={
                        () => { props.navigation.navigate('Projeto Perfil') }
                    }
                />
            </View>
            <View style={styles.boxButton} >
                <Button
                    title="Projeto Perfil"
                    onPress={
                        () => { props.navigation.navigate('Projeto Perfil') }
                    }
                />
            </View>
            <View style={styles.boxButton} >
                <Button
                    title="Projeto Perfil"
                    onPress={
                        () => { props.navigation.navigate('Projeto Perfil') }
                    }
                />
            </View>
            <View style={styles.boxButton} >
                <Button
                    title="Projeto Perfil"
                    onPress={
                        () => { props.navigation.navigate('Projeto Perfil') }
                    }
                />
            </View>

        </View>
    );
}