import React, {useState} from "react";
import { TextInput, Text, TouchableOpacity, StyleSheet, View, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/stackTypes";
import { useNavigation } from "@react-navigation/native";
import { addDrop } from "../redux/actions/genshin-actions";
import IItem from "../entities/item";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";

const image = {uri: "https://preview.redd.it/sok7elhncww61.jpg?width=1902&format=pjpg&auto=webp&s=c52a0105b388e68419f9e248a18faa719b2c2159"};

const AddDrop: React.FC = () => {
    // hooks for text inputs
    const [photo, setPhoto] = useState('');
    const [dropName, setDropName] = useState('');
    const [generalName, setGeneralName] = useState('');
    const [monsters, setMonsters] = useState('');
    const [minWorldRank, setMinWorldRank] = useState(0);
    const [dropRate, setDropRate] = useState(0);
    const [rarity, setRarity] = useState('');

    type main = StackNavigationProp<RootStackParamList, 'AllDrops'>
    const navigation = useNavigation<main>();
    const dispatch = useDispatch();

    const submit = () => {
        const item: IItem = {
            dropName: dropName,
            photo: photo,
            generalName: generalName,
            monster: monsters.split(' '),
            minWorldRank: minWorldRank,
            dropRate: dropRate,
            rarity: rarity,
        };
        if(dropName && photo && generalName && monsters && minWorldRank && dropRate && rarity) {
            Toast.show({
                type: 'success',
                position: 'top',
                text1: 'Success!',
                text2: `${dropName} added to the list.`
            })
            dispatch(addDrop(item));
            navigation.goBack();
        }
        else{
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Addition Failed...',
                text2: `One or more of the input fields are empty.`
            })
        }
    }

    return(
        <View style = {styles.container}>
            <ImageBackground
                style = {styles.background}
                source = {image}
                resizeMode = "cover"
            >
                <Text>Add Drop Screen</Text>
                <TextInput style = {styles.input} onChangeText={setDropName} placeholder="Item Drop Name">{dropName}</TextInput>
                <TextInput style = {styles.input} onChangeText={setPhoto} placeholder="Item Drop Image URL">{photo}</TextInput>
                <TextInput style = {styles.input} onChangeText={setGeneralName} placeholder="Item Group Name">{generalName}</TextInput>
                {/* Will need to work on this */}
                <TextInput style = {styles.input} 
                onChangeText={setMonsters} 
                placeholder="Monsters" 
                />
                
                <TextInput 
                style = {styles.input} 
                onChangeText={(value) => setMinWorldRank(Number(value))} 
                placeholder="Minimum World Rank" 
                keyboardType='numeric'
                />
                <TextInput 
                style = {styles.input} 
                onChangeText={(value) => setDropRate(Number(value))} 
                placeholder="Drop Rate (%)" 
                keyboardType='numeric'
                />
                
                <TextInput style = {styles.input} onChangeText={setRarity} placeholder="Rarity">{rarity}</TextInput>
                {/* Submit Button */}
                <TouchableOpacity style = {styles.button} onPress = {submit}>
                    <Text style = {styles.buttonText}>Submit</Text>
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

export default AddDrop;