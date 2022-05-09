import {FlatList , Text, TouchableOpacity, View} from "react-native";
import Card from "../components/SubjectCard"
import axios from "axios";
import {useEffect, useState} from "react";




function SubjectScreen({navigation}) {
    const [loading, setLoading] = useState(true);
    const [subjects, setSubjects] = useState([]);
    const [allSubjects, setAllSubjects] = useState([]);

    useEffect(() => {

        const fetchSubjects = async () => {
            var config = {
                method: 'get',
                url: 'http://localhost:8080/Subjects',
                headers: {
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb3R0ZUBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX1NUVURFTlQiXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xvZ2luIiwiZXhwIjoxNjUyMTMxNjQ3fQ.bIETA2bURvKNAuelj5VJfAm6nEUtlPRzSlJ3f37hpK8'
                }
            };

            setLoading(true);
            try {
                const {data: response} = await axios(config);
                setSubjects(response);
                setAllSubjects(response);
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
            <Text> {item.title}</Text>
            // <Item {item.title}/>

        )

    };


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C1E1C1'}}>
            <FlatList data={subjects} renderItem={renderItem} keyExtractor={item => item.id}

            />

        </View>
    );
}
export default SubjectScreen