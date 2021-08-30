import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert, Image, ScrollView } from "react-native";
import IItem from "../entities/item";
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/stackTypes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { deleteDrop } from "../redux/actions/genshin-actions";
import Toast from "react-native-toast-message";
import Rating from "../components/Rarity/Rating";

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
    }; 

    return (
        <View style = {styles.container}>
            <ImageBackground
                style = {styles.background}
                source = {image}
                resizeMode = "cover"
            >
            <ScrollView>
                {/* Passed-in Item Information */}
                <Image
                    style = {styles.dropPhoto}
                    source = {{
                        uri: params.photo,
                    }} 
                />
                    <Text style = {styles.name}>{params.dropName}</Text>
                    <Rating rate = {params.rarity}/>
                    <View style = {styles.info}>
                        <Text style = {styles.genName}>Item Set: {params.generalName}</Text>
                        <Text style = {styles.rankAndRate}>Drop Rate: {params.dropRate}</Text>
                        <Text style = {styles.rankAndRate}>Minimum World Rank: {params.minWorldRank}</Text>
                        <Text style = {styles.rankAndRate}>Dropped By: {params.monster.toString()}</Text>
                    </View>
                <View style = {styles.buttons}>
                    {/* Edit Button */}
                    <TouchableOpacity style = {styles.blueBtn} onPress = {() => navigation.navigate('EditDrop', params)}>
                        <Text style = {styles.blueBtnText}>Edit</Text>    
                    </TouchableOpacity>

                    {/* Delete Button */}
                    <TouchableOpacity style = {styles.redBtn} onPress = {alerting}>
                        <Text style = {styles.redBtnText}>Delete</Text>    
                    </TouchableOpacity>
                </View>
                </ScrollView>
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
        justifyContent: 'center',
    },

    edit: {
        alignSelf: 'flex-end',
        marginRight: '10%',
        marginTop: '5%',
    },

    dropPhoto: {
        height: 250,
        width: 250,
        alignSelf: 'center',
        borderRadius: 1000/2,
    },

    info: {
        paddingTop: '5%',
        backgroundColor: '#B8B8B8',
        opacity: 0.8,
        marginBottom: '5%',
    },

    name: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        marginBottom: '5%',
    },

    genName: {
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
        marginBottom: '5%',
    },

    rankAndRate: {
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
        marginBottom: '5%',
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '4%',
        opacity: 0.9,
    },

    redBtn: {
        backgroundColor: 'red',
        borderRadius: 1000/2,
        alignSelf: 'center',
        width: '45%',
    },

    blueBtn: {
        backgroundColor: '#01CDD9',
        borderRadius: 1000/2,
        alignSelf: 'center',
        width: '45%',
    },

    redBtnText: {
        textAlign: 'center',
        fontSize: 22,
        color: 'white',
        padding: '3%',
    },

    blueBtnText: {
        textAlign: 'center',
        fontSize: 22,
        color: 'white',
        padding: '3%',
    },
})

export default ViewDrop;