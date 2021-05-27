import React, { Component } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, ImageBackground} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class PollutionScreen extends Component{
    render(){
        return(
            <View style={{backgroundColor:"cyan"}}>
                <AppHeader/>
                <Text style={styles.textQS}>
                    What is Air Pollution?
                </Text>
    <Text style={styles.textStyle}>
        Answer -: Air pollution is a mixture of solid particles and gases in the air. Car emissions, chemicals from factories, dust, pollen and mold spores may be suspended as particles. Ozone, a gas, is a major part of air pollution in cities. When ozone forms air pollution, it's also called smog. Some air pollutants are poisonous.
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