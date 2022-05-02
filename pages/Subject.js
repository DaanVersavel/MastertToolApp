import {FlatList} from "react-native";
import {View} from "react-native-web";

render()
return(
    <View style={{}}>
        <FlatList data={userChatList}
                  keyExtractor={(item, index) => index}
                  ListHeaderComponent={
                      <View style={{width: '100%', height: moderateScale(8)}}/>
                  }
                  ListFooterComponent={
                      <View style={{width: '100%', height:28}}/>
                  }
                  renderItem={({item, index}) =>
                      this.chatListItemView(item, index)//this is a main view
                  }/>
    </View>
)