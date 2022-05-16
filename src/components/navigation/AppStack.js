import {createDrawerNavigator} from "@react-navigation/drawer";
import CustomDrawer from "../CustumDrawer";
import {Ionicons} from "@expo/vector-icons";
import SubjectNavigator from "../navigation/SubjectNavigator";
import StarredNavigator from "../navigation/StarredNavigator";
import LogoutScreen from "../../screens/LogoutScreen";
import WelcomeScreen from "../../screens/WelcomeScreen";


const Drawer = createDrawerNavigator();


const AppStack = (navigation) => {
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
                component={WelcomeScreen}
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


            <Drawer.Screen
                name="Logout"
                component={LogoutScreen}
                options={{
                    drawerIcon: ({color}) => (
                        <Ionicons name="exit-outline" size={22} color={color} />
                    ),
                }}
            />

        </Drawer.Navigator>
    );
};


export default AppStack;