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
        borderRadius: 8,
        elevation:3,
        backgroundColor: "#fff",
        shadowOffset:{width:1,height:1},
        shadowColor: "#3330",
        shadowOpacity: 0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6
    },
    cardContent: {
        marginHorizontal:18,
        marginVertical:20

    }
})

export default SubjectCard;