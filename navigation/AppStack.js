import {createDrawerNavigator} from "@react-navigation/drawer";
import CustomDrawer from "../components/CustumDrawer";
import SubjectScreen from '../pages/SubjectScreen';
import {Ionicons} from "@expo/vector-icons";
import {View,Text} from "react-native";


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
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    // fontFamily: 'Roboto-Medium',
                    fontSize: 15,
                },
            }}>
            <Drawer.Screen
                name="Welcome"
                component={HomeScreen}
                options={{
                    drawerIcon: ({color}) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    ),
                }}
            />
            {/*<Drawer.Screen*/}
            {/*    name="Profile"*/}
            {/*    component={ProfileScreen}*/}
            {/*    options={{*/}
            {/*        drawerIcon: ({color}) => (*/}
            {/*            <Ionicons name="person-outline" size={22} color={color} />*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}
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