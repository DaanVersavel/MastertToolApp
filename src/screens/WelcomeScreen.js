import {ImageBackground, Text, View} from "react-native";
import React from "react";


function WelcomeScreen( ) {
    return (
        <View  style={{flex: 1, justifyContent: 'center',backgroundColor:'#ffffff'}} >
            <ImageBackground
                source={require('../../assets/KU-Leuven_branded.jpg')}
                style={{height: 250, width:300, justifyContent:"center",marginHorizontal:40,marginTop:-300}}>

            </ImageBackground>

            <Text style={{fontSize:30, marginTop:30, marginLeft:50}}>Welcome to the App</Text>

        </View>
    );
}

export default WelcomeScreen;