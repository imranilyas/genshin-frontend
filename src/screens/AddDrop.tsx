import React, {useState} from "react";
import { TextInput, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/stackTypes";
import { useNavigation } from "@react-navigation/native";

const AddDrop: React.FC = () => {
    // hooks for text inputs
    const [photo, setPhoto] = useState('');
    const [dropName, setDropName] = useState('');
    const [generalName, setGeneralName] = useState('');
    const [monsters, setMonsters] = useState(['']);
    const [minWorldRank, setMinWorldRank] = useState(0);
    const [dropRate, setDropRate] = useState(0);
    const [rarity, setRarity] = useState('');

    type main = StackNavigationProp<RootStackParamList, 'AllDrops'>
    const navigation = useNavigation<main>();

    const submit = () => {
        navigation.goBack();
    }

    return(
        <View style = {styles.container}>
            <Text>Add Drop Screen</Text>
            <TextInput style = {styles.input} onChangeText={setPhoto} placeholder="Item Drop Image URL">{photo}</TextInput>
            <TextInput style = {styles.input} onChangeText={setDropName} placeholder="Item Drop Name">{dropName}</TextInput>
            <TextInput style = {styles.input} onChangeText={setGeneralName} placeholder="Name of Item Drop Set">{generalName}</TextInput>
            {/* Will need to work on this */}
            <TextInput style = {styles.input} 
            onChangeText={(value) => monsters.push(value)} 
            placeholder="" 
            />
            
            <TextInput 
            style = {styles.input} 
            onChangeText={(value) => setMinWorldRank(Number(value))} 
            placeholder="" 
            keyboardType='numeric'
            />
            <TextInput 
            style = {styles.input} 
            onChangeText={(value) => setDropRate(Number(value))} 
            placeholder="" 
            keyboardType='numeric'
            />
            
            <TextInput style = {styles.input} onChangeText={setRarity} placeholder="">{rarity}</TextInput>
            {/* Submit Button */}
            <TouchableOpacity style = {styles.button} onPress = {submit}>
                <Text>Submit</Text>
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
    },

    button: {
        backgroundColor: 'black',
    },
})

export default AddDrop;