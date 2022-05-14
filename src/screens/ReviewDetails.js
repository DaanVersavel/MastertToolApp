import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import axios from "axios";
import {Ionicons} from "@expo/vector-icons";

// function ReviewDetails({navigation,subjectid}){
function ReviewDetails({ route, navigation }){
    const { itemId } = route.params;
    const [subject, setSubject] = useState([]);


    console.log(itemId)
    useEffect(() => {
        const fetchSubject = async () => {
            console.log(itemId)
            var config = {
                method: 'get',
                url: `https://masterprooftoolbackend.herokuapp.com/Subjects/${itemId}`,
                headers: {
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb3R0ZUBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX1NUVURFTlQiXSwiaXNzIjoiaHR0cHM6Ly9tYXN0ZXJwcm9vZnRvb2xiYWNrZW5kLmhlcm9rdWFwcC5jb20vbG9naW4iLCJleHAiOjE2NTI1NjE1NzR9.QNUnQu77ftIEwj55DefzSpJ4sIEa4pSiNuuNP7rZD_I'
                }
            };

            try {
                const {data: response} = await axios(config);
                setSubject(response);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchSubject()

    }, [])

    const styles = StyleSheet.create({
        button:{
            // backgroundColor: "#cb1c1c",
            marginRight:320,
            marginLeft:15,
            marginTop:10,
            marginBottom:-20

        }
    })

    console.log(subject)
    // console.log(subject.promotor)

    return(
      <View style={{backgroundColor:'#ffffff'}}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
              <Ionicons name="arrow-back-outline" size={30}/>
          </TouchableOpacity>

          <Text> {subject.title}</Text>
          <Text> {subject.description}</Text>
          <Text> {subject.astudents}</Text>
          {/*<Text style={styles.description}> <Ionicons name="map-outline" size={20}  /> {subject.campussen[0].name}</Text>*/}


          {/* <Text> {subject.promotor.surname}</Text>*/}
          {/*<Text> {subject.promotor.firstName } {subject.promotor.surname}</Text>*/}
r
      </View>

    );


}
export default ReviewDetails;