import React, {useState} from "react";
import {TextInput, Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/stackTypes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import IItem from "../entities/item";
import { updateDrop } from "../redux/actions/genshin-actions";

const image = {uri: "https://i.imgur.com/PHkCmAQ.jpg"};

const EditDrop: React.FC = () => {
    // routing props
    const route = useRoute();
    const params = route.params as IItem;

    // hooks for text inputs
    const [photo, setPhoto] = useState(params.photo);
    const [dropName, setDropName] = useState(params.dropName);
    const [generalName, setGeneralName] = useState(params.generalName);
    const [monsters, setMonsters] = useState(params.monster.toString());
    const [minWorldRank, setMinWorldRank] = useState(params.minWorldRank);
    const [dropRate, setDropRate] = useState(params.dropRate);
    const [rarity, setRarity] = useState(params.rarity);

    // Navigation
    type main = StackNavigationProp<RootStackParamList, 'AllDrops'>
    const navigation = useNavigation<main>();
    const dispatch = useDispatch();

    const update = () => {
        const item: IItem = {
            dropName: dropName,
            photo: photo,
            generalName: generalName,
            monster: monsters.split(','),
            minWorldRank: minWorldRank,
            dropRate: dropRate,
            rarity: rarity,
        };
        if(dropName && photo) {
            console.log(item);
            dispatch(updateDrop(item)); 
            navigation.goBack();
        }
    }

    return(
        <View style = {styles.container}>
            <ImageBackground
                style = {styles.background}
                source = {image}
                resizeMode = "cover"
            >
                <Text>Edit Drop Screen</Text>
                <TextInput style = {styles.input} onChangeText={setDropName} placeholder="Item Drop Name">{dropName}</TextInput>
                <TextInput style = {styles.input} onChangeText={setPhoto} placeholder="Item Drop Image URL">{photo}</TextInput>
                <TextInput style = {styles.input} onChangeText={setGeneralName} placeholder="Item Group Name">{generalName}</TextInput>
                {/* Will need to work on this */}
                <TextInput style = {styles.input} onChangeText={setMonsters} placeholder="Monsters">{monsters}</TextInput>
                
                <TextInput 
                    style = {styles.input} 
                    onChangeText={(value) => setMinWorldRank(Number(value))} 
                    placeholder="Minimum World Rank" 
                    keyboardType='numeric'
                >
                    {minWorldRank}
                </TextInput>

                <TextInput 
                    style = {styles.input} 
                    onChangeText={(value) => setDropRate(Number(value))} 
                    placeholder="Drop Rate (%)" 
                    keyboardType='numeric'
                >
                    {dropRate}
                </TextInput>

                <TextInput style = {styles.input} onChangeText={setRarity} placeholder="Rarity">{rarity}</TextInput>
                {/* Submit Button */}
                <TouchableOpacity style = {styles.button} onPress = {update}>
                    <Text style = {styles.buttonText}>Update</Text>
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
        justifyContent: 'center',
    },

    input: {
        fontSize: 20,
        backgroundColor: 'green',
        padding: '2%',
        margin: '2%',
    },

    button: {
        backgroundColor: 'grey',
    },

    buttonText: {
        textAlign: 'center',
    },
})

export default EditDrop;