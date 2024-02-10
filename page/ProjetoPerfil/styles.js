import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    capa: {
        flex: 1,
        width: 500,
        height: 200,
    },
    boxPerfil: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    foto: {
        width: 120,
        height: 120,
        borderRadius: 50,
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 10,
    },
    titulo: {
        marginBottom: 20,
        fontSize: 22,
        fontWeight: 'bold',
        textDecorationLine: "underline",
    },
    info: {
        textAlign: 'center',
        marginHorizontal: 15,
        fontSize: 16,
    }
});
export default styles;