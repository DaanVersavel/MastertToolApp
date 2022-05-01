
import {StyleSheet,Button, Text, View } from 'react-native';

import Login from "./components/Login";
import Subject from "./components/Subject";
import * as React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C1E1C1'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()


function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={HomeScreen}  />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1E1C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

