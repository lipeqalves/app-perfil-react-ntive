import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        backgroundColor:'#f4fbc3'
    },
img:{
    width:300,
    height:80,
},
titulo:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
    marginBottom:5
}, 
descricao:{
    marginBottom:20,
    textAlign: 'center',
    width:320,
},
card:{
    width:320,
    backgroundColor:'#fff',
    marginBottom:5,
    padding:10,
    borderRadius:5,
    borderColor:'#979797',
    borderWidth:1,
},
tituloCard:{
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:5,
}
})

export default styles;