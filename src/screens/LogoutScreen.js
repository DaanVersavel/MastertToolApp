import { Text, View} from "react-native";
import CustomButton from "../components/CustomButton";


function LogoutScreen({ navigation }) {
    // useEffect(() => {
    //     navigation.navigate('Login')
    // })

    return (
        <View  style={{flex: 1, justifyContent: 'center',backgroundColor:'#ffffff'}} >
            <Text style={{fontSize:30, marginBottom:30, marginLeft:100}}>See you soon</Text>
            <CustomButton
                label={"Logout"}
                onPress={() => {navigation.navigate('Login')}}
            />
        </View>
    );
}

export default LogoutScreen;