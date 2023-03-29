import React, { Component } from 'react';
import {
    Text, View, ImageBackground, StyleSheet,
    SafeAreaView, Platform, StatusBar,
    TouchableOpacity, TextInput,
    Alert, ScrollView
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Activities from './Activities';
import db from '../config.js'
export default class AddActivity extends Component {
    constructor(props){
        super(props);
        this.state = {
            activityTask : ""
        }
    }
    


    render() {
  
        return (
            <View
                style={styles.container}
            >
                <SafeAreaView
                    style={styles.droidSafeArea}
                />
                <ImageBackground
                    source={require("../assets/addBg.png")}
                    style={styles.imageBackgroundStyle}
                >
                
                <TextInput
                                style={styles.textinput}
                                onChangeText={text => this.setState({ task: text })}
                                placeholder={"Task"}
                                placeholderTextColor={""}
                                autoFocus
                            />

                <TouchableOpacity
                
                onPress={()=>{
                    this.props.navigation.navigate("Activities")
                    

                }}

                >

                <Text>ADD</Text>

                </TouchableOpacity>
                   
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
       
    },
    imageBackgroundStyle: {
        resizeMode: "cover",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    textinput: {
        width: RFValue(250),
        height: RFValue(50),
        padding: RFValue(10),
        borderColor: "#CAEBDA",
        borderWidth: RFValue(4),
        borderRadius: RFValue(10),
        fontSize: RFValue(20),
        color: "#22423D",
        backgroundColor: "#CAEBDA",
        marginBottom : RFValue(10)
    },
})