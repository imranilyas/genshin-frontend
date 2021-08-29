import React, {useState} from "react";
import { TextInput, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/stackTypes";
import { useNavigation } from "@react-navigation/native";
import { addDrop } from "../redux/actions/genshin-actions";
import IItem from "../entities/item";
import { useDispatch } from "react-redux";

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
        if(dropName && photo) {
            console.log(item);
            dispatch(addDrop(item)); 
            navigation.goBack();
        }
    }

    return(
        <View style = {styles.container}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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