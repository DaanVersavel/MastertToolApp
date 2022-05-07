import {Button, SafeAreaView, Text, View} from "react-native";
import CustomButton from "../components/CustomButton";


function WelcomeScreen({ navigation }) {
    return (
        <View  style={{flex: 1, justifyContent: 'center'}} >
            <Text>Home Screen</Text>
                    <CustomButton
                        label={"Login"}
                        onPress={() => {navigation.navigate('Login')}}
                    />
        </View>
    );
}

export default WelcomeScreen;