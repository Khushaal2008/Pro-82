import  React , { Component } from 'react';
import {View,Image,StyleSheet,Text,Platform, StatusBar} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';

let customFonts = {"My own font":require('../assets/admiration-pains/Admiration-Pains.ttf')}

let images = require('./temp_images.json')

export default class PostCard extends React.Component
{ 
    constructor(){
    super();
    this.state={
        post:false,
    }
}

componentDidMount(){
    this.loadFontsAsync()
}

async loadFontsAsync(){
   await Font.loadAsync(customFonts)
   this.setState({
       post:true,
   })
}

renderItem=({item: author})=> {
return <PostCard post={author}/>
}


keyExtractor = (item,index)=>index.toString();
render()
{
    if(!this.state.post)
    {
        return <AppLoading/>
    }
    else{
        return(
            <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image
                source={require('../assets/story_image_1.png')}
                style={styles.storyImage}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.storyTitleText}>
                        {this.props.story.title}
                    </Text>
                    <Text style={styles.storyAuthorText}>
                        {this.props.story.author}
                    </Text>
                    <Text style={styles.descriptionText}>
                        {this.props.story.description}
                    </Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons  name={"heart"} size={RFValue(30)} color={"white"}/>
                        <Text style={styles.likeText}>12K</Text>
                    </View>
                </View>
            </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93
  }
});
