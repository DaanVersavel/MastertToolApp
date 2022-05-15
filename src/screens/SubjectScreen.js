import {FlatList, StyleSheet, Text, TouchableOpacity, View, Animated} from "react-native";
import Card from "../components/SubjectCard"
import axios from "axios";
import {useEffect, useState} from "react";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Swipeable} from "react-native-gesture-handler";
import {Screen} from "react-native-screens";

const Stack = createNativeStackNavigator();


function SubjectScreen({navigation}) {
    const [loading, setLoading] = useState(true);
    const [subjects, setSubjects] = useState([]);






     useEffect(/*() => {*/
        fetchSubjectsagain)
        // const fetchSubjects = async () => {
        //     var config = {
        //         method: 'get',
        //         url: 'https://masterprooftoolbackend.herokuapp.com/Subjects',
        //         headers: {
        //             'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb3R0ZUBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX1NUVURFTlQiXSwiaXNzIjoiaHR0cHM6Ly9tYXN0ZXJwcm9vZnRvb2xiYWNrZW5kLmhlcm9rdWFwcC5jb20vbG9naW4iLCJleHAiOjE2NTI2MzA2MzF9.amu0Y2LcMxUxLiSdPXQO7h60dwoAUaQ-P-q5VE6lrm8'
        //         }
        //     };
        //
        //     setLoading(true);
        //     try {
        //         const {data: response} = await axios(config);
        //         setSubjects(response);
        //     } catch (error) {
        //         console.error(error.message);
        //     }
        //     setLoading(false);
        // }
        // fetchSubjects()

     ////, [])

     async function fetchSubjectsagain() {
        var config = {
            method: 'get',
            url: 'https://masterprooftoolbackend.herokuapp.com/Subjects',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb3R0ZUBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX1NUVURFTlQiXSwiaXNzIjoiaHR0cHM6Ly9tYXN0ZXJwcm9vZnRvb2xiYWNrZW5kLmhlcm9rdWFwcC5jb20vbG9naW4iLCJleHAiOjE2NTI2MzA2MzF9.amu0Y2LcMxUxLiSdPXQO7h60dwoAUaQ-P-q5VE6lrm8'
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



    async function putStarred (subjectid)  {
        // console.log(subjectid)
        var config = {
            method: 'put',
            url: `https://masterprooftoolbackend.herokuapp.com/Student/StarredSave/${subjectid}`,
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb3R0ZUBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX1NUVURFTlQiXSwiaXNzIjoiaHR0cHM6Ly9tYXN0ZXJwcm9vZnRvb2xiYWNrZW5kLmhlcm9rdWFwcC5jb20vbG9naW4iLCJleHAiOjE2NTI2MzA2MzF9.amu0Y2LcMxUxLiSdPXQO7h60dwoAUaQ-P-q5VE6lrm8'
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
        // const scale = dragX.interpolate({
        //     inputRange:[-100,0],
        //     outputRange: [1,0]
        //
        // })

        return (
            <TouchableOpacity style={styles.touchable} onPress={() =>putStarred(subjectid)}>
                <View style={styles.rightActions}>
                    <Animated.Text style={styles.actionText}> add to starred</Animated.Text>
                </View>
            </TouchableOpacity>
        )

    }
    const renderItem = ({item }) => {

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

                        {/*<Text style={styles.description}> <Ionicons name="person-outline" size={20}  /> {item.promotor.firstName } {item.promotor.surname}</Text>*/}
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
            //fontWeight: "bold",
            fontSize: 17,
            // paddingBottom:5,
            marginBottom:10,
            display:"flex"
        },
        icons:{
            paddingBottom:1,
            paddingRight: 1,
        },
        rightActions:{
            backgroundColor :"#f8f8b8",
            justifyContent: "center",
            flex:1,
            marginTop:10,
            marginBottom:10,
            marginLeft:10,
            // alignItems: "flex-end"
        },
        actionText:{
            fontWeight: "bold",
            color: "#000000",
            fontSize:23,
            // marginLeft:100,
            // marginRight:50
            textAlign:'right',
            paddingRight:10,
            paddingLeft:30

        },
        touchable:{
            // padding:20,
            marginLeft:-50,
            // flex:1,
            // marginLeft:150

        }

    })

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#fff'}}>
            <FlatList data={subjects} renderItem={renderItem} keyExtractor={(item) => item.id}
            />
        </View>
    );
}
export default SubjectScreen