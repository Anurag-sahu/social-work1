import React, { Component } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, ImageBackground} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class SollutionScreen extends Component{
    render(){
        return(
            <View style={{backgroundColor:"cyan"}}>
                <AppHeader/>
                <Text style={styles.textQS}>
                    How to Stop water Pollution?
                </Text>
    <Text style={styles.textStyle}>
        1)Reduce Your Use of Single-Use Plastics.
        </Text>
        
        <Text style={styles.textStyle}>
        2)Recycle Properly.
        </Text>
        
        <Text style={styles.textStyle}>
        3)Participate In (or Organize) a Beach or River Cleanup.
        </Text>

        <Text style={styles.textStyle}>
        4)Support Bans.
        </Text>

        <Text style={styles.textStyle}>
        5)Avoid Products Containing Microbeads.
        </Text>

        <Text style={styles.textStyle}>
        6)Spread the Word.
        </Text>

        <Text style={styles.textStyle}>
        7)Support Organizations Addressing Plastic Pollution.
        </Text>
        <TouchableOpacity style={styles.buttonStyle}
        onPress={()=>{
            this.props.navigation.navigate('MenuScreen');
        }}>
            <Text style={styles.textStyle2}>
                Back
            </Text>
        </TouchableOpacity>
        </View>
        )
    }
}
const styles=StyleSheet.create({
    textStyle:{
        fontSize:36,
        fontWeight:1000,
        marginBottom:10,
        color:"grey",
        paddingLeft:20
    },
    buttonStyle:{
        width:200,
        height:75,
        alignSelf:'center',
        textAlign:'center',
        backgroundColor:"blue",
        marginTop:100,
        borderRadius:50,
        marginBottom:14
    },
    textStyle2:{
        paddingTop:20,
        fontSize:25,
        color:"white",
        fontWeight:500,
    },
    textQS:{
        fontSize:45,
        fontWeight:1000,
        marginBottom:10,
        paddingLeft:20
    },
})