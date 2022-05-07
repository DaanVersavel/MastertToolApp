import React from 'react';
import Card from '../components/SubjectCard'
import {Text, View} from "react-native";

function ReviewDetails({navigation}){
    return(
      <View>
          <Card>
              <Text> {navigation.getParam("")}</Text>

          </Card>
      </View>

    );
}
export default ReviewDetails;