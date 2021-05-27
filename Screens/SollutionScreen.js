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
        1)Using public transports.
        </Text>
        
        <Text style={styles.textStyle}>
        2)Planting more and more trees.
        </Text>
        
        <Text style={styles.textStyle}>
        3)Turn off the lights when not in use.
        </Text>

        <Text style={styles.textStyle}>
        4)Recycle and Reuse.
        </Text>

        <Text style={styles.textStyle}>
        5)No to plastic bags.
        </Text>

        <Text style={styles.textStyle}>
        6)Reduction of forest fires and smoking.
        </Text>

        <Text style={styles.textStyle}>
        7)Use filters for chimneys.
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