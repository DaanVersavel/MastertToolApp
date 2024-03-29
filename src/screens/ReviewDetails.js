import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import axios from "axios";
import {Ionicons} from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

function ReviewDetails({ route, navigation }){
    const { itemId } = route.params;
    const [subject, setSubject] = useState([]);


    useEffect(() => {

        const fetchSubject = async () => {
            let token = await SecureStore.getItemAsync('access_token');
            var config = {
                method: 'get',
                url: `https://masterprooftoolbackend.herokuapp.com/Subjects/${itemId}`,
                headers: {
                    'Authorization': `Bearer ${token}`
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

        },
        title:{
            fontWeight: "bold",
            fontSize: 22,
            marginBottom:25,
            marginTop: 25,
            marginLeft:15,

        },
        description:{
            fontSize: 19,
            marginLeft:15,
            marginBottom:25,


        }
    })

    // console.log(subject)


    return(
      <View style={{backgroundColor:'#ffffff'}}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
              <Ionicons name="arrow-back-outline" size={30}/>
          </TouchableOpacity>

          <Text style={styles.title}> {subject.title}</Text>
          <Text style={styles.description}> {subject.description}</Text>


          {/*<Text style={styles.description}> <Ionicons name="person-outline" size={20}  /> {subject.promotor.firstName } {subject.promotor.surname} </Text>*/}
          {/*<Text style={styles.description}> <Ionicons name="mail-outline" size={20}  /> {subject.promotor.email }  </Text>*/}

          {/*<Text style={styles.description}> <Ionicons name="clipboard-outline" size={20}/> {subject.coordinator.firstName } {subject.coordinator.surname} </Text>*/}



          {/*<Text style={styles.description}> <Ionicons name="map-outline" size={20}  /> {subject.campussen[0].name}</Text>*/}
          <Text style={styles.description}> <Ionicons name="people-outline" size={20}  />  {subject.astudents}</Text>
          <Text style={styles.description}>  {subject.remark}</Text>

      </View>

    );


}
export default ReviewDetails;