import React from 'react';
import Card from '../components/SubjectCard'
import {Text, View} from "react-native";

function ReviewDetails({navigation}){
    return(
      <View>
          <Card>
              <Text> {navigation.title}</Text>
              <Text> {navigation.description}</Text>

          </Card>
      </View>

    );
}
export default ReviewDetails;