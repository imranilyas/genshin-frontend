import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert, Image } from "react-native";
import IItem from "../entities/item";
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/stackTypes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { deleteDrop } from "../redux/actions/genshin-actions";
import Toast from "react-native-toast-message";

const image = {uri: "https://pbs.twimg.com/media/Et9411BXEAUq8P5.jpg"};

const ViewDrop: React.FC = () => {
    // Navigation
    type main = StackNavigationProp<RootStackParamList, 'AllDrops'>
    const navigation = useNavigation<main>(); 
    const dispatch = useDispatch();
    
    // Route params
    const route = useRoute();
    const params = route.params as IItem;

    const alerting = () => {
        Alert.alert(
            "Deleting an Item",
            "Are you sure you want to delete this item?",
            [
                {
                    text: "No",
                    style: 'cancel',
                },

                {
                    text: "Yes",
                    onPress: () => deleteItem(),
                    style: "destructive",
                }
            ]
        )
    }

    //Delete handler
    const deleteItem = () => {
        Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Success!',
            text2: `${params.dropName} has been deleted.`
        })
        dispatch(deleteDrop(params));
        navigation.goBack();
    }

    return (
        <View style = {styles.container}>
            <ImageBackground
                style = {styles.background}
                source = {image}
                resizeMode = "cover"
            >
                <Text>View Specific Drop Screen</Text>
                
                {/* Passed-in Item Information */}
                <Image
                    style = {styles.dropPhoto}
                    source = {{
                        uri: params.photo,
                    }} 
                />
                <Text>{params.dropName}</Text>
                <Text>{params.rarity}</Text>
                <Text>Item Set: {params.generalName}</Text>
                <Text>{params.dropRate}</Text>
                <Text>{params.minWorldRank}</Text>
                <Text>Dropped By: {params.monster.toString()}</Text>

                
                {/* Edit Button */}
                <TouchableOpacity style = {styles.blueBtn} onPress = {() => navigation.navigate('EditDrop', params)}>
                    <Text style = {styles.blueBtnText}>Edit Drop</Text>    
                </TouchableOpacity>

                {/* Delete Button */}
                <TouchableOpacity style = {styles.redBtn} onPress = {alerting}>
                    <Text style = {styles.redBtnText}>Delete Drop</Text>    
                </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    background: {
        flex: 1,
        //justifyContent: 'center',
    },

    dropPhoto: {
        height: 220,
        width: 220,
        alignSelf: 'center',
        //backgroundColor: 'white',
        borderRadius: 1000/2,
        //opacity: 0.8,
    },

    redBtn: {
        borderColor: 'red',
        borderWidth: 2,
    },

    blueBtn: {
        borderColor: 'blue',
        borderWidth: 2,
    },

    redBtnText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'red',
    },

    blueBtnText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'blue',
    },
})

export default ViewDrop;