import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#beceff',

    },
    img:{
    width:300,
    height:50,
    marginBottom:10,
  },
  titulo:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10,
  },
    descricao: {
        marginBottom: 20,
        textAlign: 'center',
        width: 320,
    },
    card: {
        width: 320,
        backgroundColor: '#fff',
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 1,
    },
    tituloCard:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5,
    }
})

export default styles;