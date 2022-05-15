
import {Button, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from "react";
import {NavigationContainer} from '@react-navigation/native';
import AppStack from "./src/components/navigation/AppStack";
import AuthStack from "./src/components/navigation/AuthStack";
import {useEffect, useState} from "react";




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
     const [signedIn, setsignedIn] = useState(false);

    return (
        <NavigationContainer>
            {signedIn ? (
                //if  sigend in render
                <AppStack/>
                // <AuthStack/>

                ): (
                //user
                <AuthStack/>//wit
                 // <AppStack />

            )}

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

