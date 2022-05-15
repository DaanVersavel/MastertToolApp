import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ReviewDetails from "../../screens/ReviewDetails";
import StarredScreen from "../../screens/StarredScreen";


const Stack = createNativeStackNavigator();

const StarredNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="StarredScreen" screenOptions={{headerStyle: {backgroundColor:'#54BCEB'}, headerShown:false}}>
            <Stack.Screen name="StarredScreen" component={StarredScreen}/>
            <Stack.Screen name="ReviewDetails" component={ReviewDetails}/>

        </Stack.Navigator>
    );
};

export default StarredNavigator;