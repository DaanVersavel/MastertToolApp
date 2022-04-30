
import { StyleSheet, Text, View } from 'react-native';

import Login from "./components/Login";
import Subject from "./components/Subject";
import React from "react";
import {NativeRouter ,Switch, Route} from "react-router-native"



export default class App extends React.Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/Subjects" component={Subject} />
                    </Switch>
                </View>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1E1C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
