import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, ImageBackground} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={{backgroundColor:"cyan"}}>
                <AppHeader/>
                <TouchableOpacity style={styles.startButton}
                onPress={()=>{
                    this.props.navigation.navigate('MenuScreen');
                }}>
                    <Text style = {styles.buttonText}>
                        Start
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    startButton:{
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 100,
        marginTop: 350,
        marginBottom: 52,
        width: 200,
        height: 100,
        backgroundColor:"black",
    },
    buttonText: {
        textAlign: 'center',
        color: 'blue',
        fontSize:50,
    },
})