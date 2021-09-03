import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CreatePost extends React.Component
{
    render()
    {
        return(
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:"red"
            }}>
                <Text style= {{fontWeight:"bold",fontSize:30,color:"white"}}>Create a Post!!</Text>

            </View>
        );
    }
}