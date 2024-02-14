import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#e1e13e4',
},
img:{
    width:300,
    height:200,
    marginBottom:20,
}, 
card:{
    width:320,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:5,
    borderColor:'#979797',
    borderWidth:1,
},
titulo:{
    textAlign:'center',
    fontSize:26,
    fontWeight:'bold',
    marginBottom:10,
},
texto:{
    textAlign:'center',
    marginBottom:20,
},
cardBtn:{
    marginBottom:10,
},
btn:{
    backgroundColor:'#372d00',
}

})

export default styles;