import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen";
import WelcomeScreen from "../../screens/WelcomeScreen";


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: true,headerStyle: {backgroundColor:'#54BCEB'},}}>
            {/*<Stack.Screen name="Welcome" component={WelcomeScreen} />*/}
            <Stack.Screen name="Login" component={LoginScreen} />

        </Stack.Navigator>
    );
};

export default AuthStack;