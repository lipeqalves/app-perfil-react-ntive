import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#fecda5',
        padding:20,
    },
    img:{
        width:300,
        height:80,
        marginBottom: 5,
    },
    boxImg:{
        width:320,
        backgroundColor:'#e1e3e4',
        marginBottom:5,
        padding:10,
        borderRadius:5,
        borderColor:'#979797',
        borderWidth:1,
    },
    tituloBoxImg:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5,
        textTransform:'capitalize'
    },
    titulo:{
        fontSize:20,
        marginBottom:5,
        fontWeight:'bold'
    },
    descricao:{
        textAlign:'center',
        marginBottom:20,
        width: 320,
    }
})

export default styles;