
import {Button, Text, View } from 'react-native';


import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppStack from "./navigation/AppStack";



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
    return (
        <NavigationContainer>
             <AppStack />
            {/*<AuthStack />*/}
        </NavigationContainer>
    );
}


// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator()
//
//
// function App() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator >
//                 <Stack.Screen name="Login" component={HomeScreen}  />
//                 {/*<Stack.Screen name="Subject" component={Login} />*/}
//             </Drawer.Navigator>
//         </NavigationContainer>
//
//     //     <NavigationContainer>
//     //         <Drawer.Navigator>
//     //             <Stack.Screen name="Login" component={HomeScreen}/>
//     //             <Stack.Screen name="Subject" component={DetailsScreen} />
//     //
//     //         </Drawer.Navigator>
//     //
//     //     </NavigationContainer>
//     );
// }
//
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#C1E1C1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;

