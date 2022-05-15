import {createDrawerNavigator} from "@react-navigation/drawer";
import CustomDrawer from "../CustumDrawer";
import {Ionicons} from "@expo/vector-icons";
import {View,Text} from "react-native";
import SubjectScreen from "../../screens/SubjectScreen";
import StarredScreen from "../../screens/StarredScreen";
import subjectnavigator from "./SubjectNavigator";
import ReviewDetails from "../../screens/ReviewDetails";
import SubjectNavigator from "../navigation/SubjectNavigator";
import StarredNavigator from "../navigation/StarredNavigator";


const Drawer = createDrawerNavigator();
function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff'}}>
            <Text>Home Screen</Text>
            {/*<Button*/}
            {/*    title="Go to Details"*/}
            {/*    onPress={() => navigation.navigate('Details')}*/}
            {/*/>*/}
        </View>
    );
}

const AppStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: true,
                headerStyle: {backgroundColor:'#54BCEB'},
                drawerActiveBackgroundColor: '#54BCEB',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    // fontFamily: 'Roboto-Medium',
                    fontSize: 15,
                },
            }}>
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: ({color}) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    ),
                    // title:"Home",
                    headerTitle:"welcome"
                }}
            />
            <Drawer.Screen
                name="Subjects"
                component={SubjectNavigator}
                options={{
                    drawerIcon: ({color}) => (
                        <Ionicons name="list-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Starred"
                component={StarredNavigator}
                options={{
                    drawerIcon: ({color}) => (
                        <Ionicons name="bookmarks-outline" size={22} color={color} />
                    ),
                }}
            />
            {/*<Drawer.Screen*/}
            {/*    name="StarredNavigator"*/}
            {/*    component={StarredNavigator}*/}
            {/*    options={{*/}
            {/*        drawerIcon: ({color}) => (*/}
            {/*            <Ionicons name="timer-outline" size={22} color={color} />*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Drawer.Screen*/}
            {/*    name="Details"*/}
            {/*    component={ReviewDetails}*/}

            {/*    options={{*/}
            {/*        drawerIcon: ({color}) => (*/}
            {/*            <Ionicons name="settings-outline" size={22} color={color} />*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}
        </Drawer.Navigator>
    );
};


export default AppStack;