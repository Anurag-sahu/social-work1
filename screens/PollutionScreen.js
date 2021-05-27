import React, { Component } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, ImageBackground} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class PollutionScreen extends Component{
    render(){
        return(
            <View style={{backgroundColor:"cyan"}}>
                <AppHeader/>
                <Text style={styles.textQS}>
                    What is water Pollution?
                </Text>
    <Text style={styles.textStyle}>
        Answer -: Water pollution is the release of substances into bodies of water that makes water unsafe for human use and disrupts aquatic ecosystems. Water pollution can be caused by a plethora of different contaminants, including toxic waste, petroleum, and disease-causing microorganisms.
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