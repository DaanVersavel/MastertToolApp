
import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import {Ionicons} from "@expo/vector-icons";



const CustomDrawer = (props, navigation) => {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{backgroundColor: '#54BCEB'}}>
                <ImageBackground
                    source={require('../../assets/img.png')}
                    style={{padding:40}}>

                </ImageBackground>
                <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{padding: 10, borderTopWidth: 1, borderTopColor: '#ccc'}}>

                <TouchableOpacity onPress={() => {navigation.popToTop() }} style={{paddingVertical: 15}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                // fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;


// const headerStyle = StyleSheet.create {
//     initialRouteName = "Login"
//     screenOptions = {
//     {
//         headerStyle: {
//             backgroundColor: '#7EC8E3',
//         }
//     ,
//         headerTintColor: '#fff',
//             headerTitleStyle
//     :
//         {
//             fontWeight: 'bold',
//         }
//     ,
//     }
// }
// }