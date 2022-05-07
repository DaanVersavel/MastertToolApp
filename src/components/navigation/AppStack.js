import {createDrawerNavigator} from "@react-navigation/drawer";
import CustomDrawer from "../CustumDrawer";
import {Ionicons} from "@expo/vector-icons";
import {View,Text} from "react-native";
import SubjectScreen from "../../screens/SubjectScreen";


const Drawer = createDrawerNavigator();
function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C1E1C1'}}>
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
                name="Subject"
                component={SubjectScreen}
                options={{
                    drawerIcon: ({color}) => (
                        <Ionicons name="list-outline" size={22} color={color} />
                    ),
                }}
            />
            {/*<Drawer.Screen*/}
            {/*    name="Messages"*/}
            {/*    component={MessagesScreen}*/}
            {/*    options={{*/}
            {/*        drawerIcon: ({color}) => (*/}
            {/*            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Drawer.Screen*/}
            {/*    name="Moments"*/}
            {/*    component={MomentsScreen}*/}
            {/*    options={{*/}
            {/*        drawerIcon: ({color}) => (*/}
            {/*            <Ionicons name="timer-outline" size={22} color={color} />*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Drawer.Screen*/}
            {/*    name="Settings"*/}
            {/*    component={SettingsScreen}*/}
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