import React from 'react';
import { Text, View, Button } from 'react-native';


export default function Home(props) {
    return (
        <View >
            <Text >
                Projetos finais das Misãos do curso de react-native da davmedia
            </Text>

            <View >
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