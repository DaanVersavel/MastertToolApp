import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from "./components/Login";
import React from "react";



export default class App extends React.Component {
    render()
    {
        return (
          <View style={styles.container}>
              <Login />

          </View>
        );
    }


    // <View style={styles.container}>
    //   <Text>TADA</Text>
    //   <StatusBar style="auto" />
    // </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1E1C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
