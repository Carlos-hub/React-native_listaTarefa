import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image: {
        width:'100%',
        height:100,
        resizeMode:'cover',
        justifyContent:'center'
    },
    opacidade:{
        width:'100%',
        height:120,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    textHeader:{
        textAlign:'center',
        fontSize: 25,
        marginTop:35,
        color:'white'
    },
    btnMenu:{
        marginTop:-5,
        width:'25%',
        height:50,
        borderWidth: 3,
        alignItems:'center',
        justifyContent:'center'
    },
    viewBtn:{
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#006b72',
        height:60
    },
    iconView:{
        fontSize:30
    },
    tarefaSingle:{
        marginTop:30,
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'black',
        flexDirection:'row',
        paddingBottom:10
    },
    TarefaSingleContainer:{
        paddingLeft:15,
        flex:1,
        width:'100%'
    },
    botaoExcluiTarefa:{
        alignItems:'flex-end',
        flex:1
    },
    iconTarefa:{
        fontSize:20,
        paddingRight:15
    }
  });


  export default styles;