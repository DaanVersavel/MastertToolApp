
import {Button, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from "react";
import {NavigationContainer} from '@react-navigation/native';
import AppStack from "./src/components/navigation/AppStack";
import AuthStack from "./src/components/navigation/AuthStack";
import {useEffect, useState} from "react";
import LoginScreen from "./src/screens/LoginScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";




// function HomeScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C1E1C1'}}>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// }
//
// function DetailsScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Details Screen</Text>
//         </View>
//     );
// }





function App() {
     // const [signedIn, setsignedIn] = useState(false);

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            {/*{signedin ? (*/}
            {/*    //if  sigend in render*/}
            {/*    <AppStack />*/}
            {/*    // <AuthStack/>*/}

            {/*    ): (*/}
            {/*    //user*/}
            {/*    //<AuthStack oke={signedInTrue} />//wit*/}
            {/*    <LoginScreen />*/}
            {/*     // <AppStack />*/}

            {/*)}*/}
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerStyle: {backgroundColor:'#54BCEB'},}}>

                <Stack.Screen name="Login" component={LoginScreen} options ={{headerShown:true}} />
                <Stack.Screen name="AppStack" component={AppStack} options ={{headerShown:false}} />


            </Stack.Navigator>

        </NavigationContainer>
    );
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#C1E1C1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;

