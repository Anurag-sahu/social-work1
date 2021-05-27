import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class MenuScreen extends Component{
    render(){
        return(
            <View>
                <AppHeader/>
                    <TouchableOpacity style={styles.buttonStyle}
                    onPress={()=>{
                        this.props.navigation.navigate('PollutionScreen');
                    }}>
                    <Text style={styles.textStyle}>
                    How air Pollution Happens?
                    </Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity style={styles.buttonStyle}
                    onPress={()=>{
                        this.props.navigation.navigate('SollutionScreen');
                    }}>
                    <Text style={styles.textStyle}>
                    How to stop Air pollution?
                    </Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    buttonStyle:{
        width:400,
        height:75,
        alignSelf:'center',
        textAlign:'center',
        backgroundColor:"blue",
        marginTop:100,
        borderRadius:50,
    },
    textStyle:{
        paddingTop:20,
        fontSize:25,
        color:"white",
    }
})