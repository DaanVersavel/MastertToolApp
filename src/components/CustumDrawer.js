
import React from 'react';
import {
    View,
    ImageBackground,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';


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
        </View>
    );
};

export default CustomDrawer;

