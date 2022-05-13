import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Card from "../components/SubjectCard"
import axios from "axios";
import {useEffect, useState} from "react";
import {Ionicons, MaterialIcons } from "@expo/vector-icons";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();


function StarredScreen({navigation}) {
    const [loading, setLoading] = useState(true);
    const [subjects, setSubjects] = useState([]);



    useEffect(() => {

        const fetchSubjects = async () => {
            var config = {
                method: 'get',
                url: 'https://masterprooftoolbackend.herokuapp.com/Student/Starred',
                headers: {
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb3R0ZUBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX1NUVURFTlQiXSwiaXNzIjoiaHR0cHM6Ly9tYXN0ZXJwcm9vZnRvb2xiYWNrZW5kLmhlcm9rdWFwcC5jb20vbG9naW4iLCJleHAiOjE2NTI0NjkwMTZ9.NDHzbqywknisXvHcIaPEfOmd9lfPfrhX04lsnVBqcTQ'
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

    const Item = ({title}) => (
        <View>
            <Text>{title}</Text>
        </View>
    );
    const renderItem = ({item}) => {

        return (
            <TouchableOpacity onPress={() =>navigation.navigate('ReviewDetails',item)} style={{alignItems:"center"}}>
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
        }

    })

    return (


        <View style={{ flex: 1, /*alignItems: 'center',justifyContent: 'center',*/ backgroundColor:'#fff'}}>
            <Text style={styles.titlePage}>You're starred subjects </Text>
            <FlatList data={subjects} renderItem={renderItem} keyExtractor={item => item.id}
            />
        </View>
    );
}
export default StarredScreen