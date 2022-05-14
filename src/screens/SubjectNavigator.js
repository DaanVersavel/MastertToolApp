import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ReviewDetails from "./ReviewDetails";
import SubjectScreen from "./SubjectScreen";


const Stack = createNativeStackNavigator();

const SubjectNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="SubjectScreen" screenOptions={{headerStyle: {backgroundColor:'#54BCEB'}}}>
            <Stack.Screen name="SubjectScreen" component={SubjectScreen} options={{headerShown:false}} />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{headerShown:false}} />

        </Stack.Navigator>
    );
};

export default SubjectNavigator;