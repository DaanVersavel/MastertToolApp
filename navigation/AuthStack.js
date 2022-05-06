import {createNativeStackNavigator} from "@react-navigation/native-stack";
import welcomeScreen from "../pages/WelcomeScreen";
import LoginScreen from "../pages/LoginScreen";


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: true}}>
            <Stack.Screen name="Welcome" component={welcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />

        </Stack.Navigator>
    );
};

export default AuthStack;