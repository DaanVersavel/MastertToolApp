import {Animated, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Card from "../components/SubjectCard"
import axios from "axios";
import {useEffect, useState} from "react";
import {Ionicons, MaterialIcons } from "@expo/vector-icons";
import {Swipeable} from "react-native-gesture-handler";

import * as SecureStore from 'expo-secure-store';




function StarredScreen({navigation}) {
    const [loading, setLoading] = useState(true);
    const [subjects, setSubjects] = useState([]);


    useEffect(() => {

    const fetchSubjects = async () => {
        let token = await SecureStore.getItemAsync('access_token');
        var config = {
            method: 'get',
            url: 'https://masterprooftoolbackend.herokuapp.com/Student/Starred',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        setLoading(true);
        try {
            const {data: response} = await axios(config);
            setSubjects(response);
        } catch (error) {
            console.error(error.message);
        }
        setLoading(false);
    }
    fetchSubjects()

    }, [])



    async function fetchSubjectsagain() {
        let token = await SecureStore.getItemAsync('access_token');
        var config = {
            method: 'get',
            url: 'https://masterprooftoolbackend.herokuapp.com/Student/Starred',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        setLoading(true);
        try {
            const {data: response} = await axios(config);
            setSubjects(response);
        } catch (error) {
            console.error(error.message);
        }
        setLoading(false);
    }




    async function removeStarred (subjectid)  {
        let token = await SecureStore.getItemAsync('access_token');
        var config = {
            method: 'put',
            url: `https://masterprooftoolbackend.herokuapp.com/Student/StarredRemove/${subjectid}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        setLoading(true);
        try {
            const {data: response} = await axios(config);
            setSubjects(response);
        } catch (error) {
            console.error(error.message);
        }
        setLoading(false);
        await fetchSubjectsagain();
    }

    function  RightActions (subjectid){
        return (
            <TouchableOpacity style={styles.touchable} onPress={() =>removeStarred(subjectid)}>
                <View style={styles.rightActions}>
                    <Animated.Text style={styles.actionText}> Remove starred</Animated.Text>
                </View>
            </TouchableOpacity>
        )

    }
    const renderItem = ({item}) => {

        return (
            <Swipeable
                overshootRight={false}
                renderRightActions={()=>RightActions(item.id)}
            >
                <TouchableOpacity activeOpacity={1} onPress={() =>navigation.navigate('ReviewDetails',{itemId :item.id})}>
                    <Card>
                        <Text style={styles.title}> {item.title}</Text>
                        <View>

                            <Text style={styles.description}><MaterialIcons name="description" size={20} style={styles.icons}/>  {item.description}</Text>
                        </View>

                        <Text style={styles.description}> <Ionicons name="person-outline" size={20}  /> {item.promotor.firstName } {item.promotor.surname}</Text>
                        <Text style={styles.description}> <Ionicons name="map-outline" size={20}  /> {item.campussen[0].name}</Text>
                        <Text style={styles.description}> <Ionicons name="people-outline" size={20}  /> {item.astudents}</Text>

                    </Card>
                </TouchableOpacity>
            </Swipeable>


    )
    };

    const styles = StyleSheet.create({
        title:{
            fontWeight: "bold",
            fontSize: 22,
            marginBottom:10
        },
        description:{
            fontSize: 17,
            marginBottom:10,
            display:"flex"
        },
        icons:{
            paddingBottom:1,
            paddingRight: 1,
        },
        titlePage:{
            marginTop:10,
            fontWeight: "bold",
            fontSize: 25,
            marginLeft:15,
            alignItems:"flex-start",
            borderBottomColor:"#100f0f",
            borderBottomWidth:1,
            borderEndWidth:50,
            marginBottom:10
        },
        touchable:{
            marginLeft:-70,

        },
        actionText:{
            fontWeight: "bold",
            color: "#000000",
            fontSize:23,
            // marginLeft:100,
            // marginRight:50
            textAlign:'right',
            paddingRight:10,
            paddingLeft:45

        },
        rightActions:{
            backgroundColor :"#ef3e35",
            justifyContent: "center",
            flex:1,
            marginTop:10,
            marginBottom:10,
            marginLeft:10,
        },

    })

    return (


        <View style={{ flex: 1,  backgroundColor:'#fff'}}>
            <TouchableOpacity activeOpacity={1} onPress={fetchSubjectsagain}>
                <Text style={styles.titlePage}>Your starred subjects </Text>
                <FlatList data={subjects} renderItem={renderItem} keyExtractor={item => item.id}
                />
            </TouchableOpacity>
        </View>
    );
}
export default StarredScreen