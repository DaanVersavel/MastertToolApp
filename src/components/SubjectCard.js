import React from 'react';
import {View, StyleSheet} from "react-native";


function SubjectCard(props){
    return(
       <View style={styles.card}>
           <View style={styles.cardContent}>
               {props.children}
           </View>
       </View>

    )

}
const styles = StyleSheet.create({
    card: {
        borderRadius: 25,
        elevation:3,
        backgroundColor: "#a9e5ff",
        shadowOffset:{width:1,height:1},
        shadowColor: "#3330",
        shadowOpacity: 0.3,
        shadowRadius:2,
        marginHorizontal:20,
        marginVertical:10,
        //borderColor: "#a6a6a6",
        //borderWidth: 3
        marginBottom:10
    },
    cardContent: {
        marginTop:10,
        marginLeft:15,
        marginRight:15,
        marginBottom:5
    },

})

export default SubjectCard;