import React, {useRef, useState} from "react";
import { TextInput, Text, 
    TouchableOpacity, StyleSheet, View, ImageBackground, 
    KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/stackTypes";
import { useNavigation } from "@react-navigation/native";
import { addDrop } from "../redux/actions/genshin-actions";
import IItem from "../entities/item";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import {Picker} from '@react-native-picker/picker';

const image = {uri: "https://preview.redd.it/sok7elhncww61.jpg?width=1902&format=pjpg&auto=webp&s=c52a0105b388e68419f9e248a18faa719b2c2159"};

const AddDrop: React.FC = () => {
    // hooks for text inputs
    const [photo, setPhoto] = useState('');
    const [dropName, setDropName] = useState('');
    const [generalName, setGeneralName] = useState('');
    const [monsters, setMonsters] = useState('');
    const [minWorldRank, setMinWorldRank] = useState(0);
    const [dropRate, setDropRate] = useState(0);

    // picker
    const [rarity, setRarity] = useState('Grey');

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style = {styles.container}>
            <ImageBackground
                style = {styles.background}
                source = {image}
                resizeMode = "cover"
            >
                    <TextInput style = {styles.input} onChangeText={setDropName} placeholder="Item Drop Name">{dropName}</TextInput>
                    <TextInput style = {styles.input} onChangeText={setPhoto} placeholder="Item Drop Image URL">{photo}</TextInput>
                    <TextInput style = {styles.input} onChangeText={setGeneralName} placeholder="Item Group Name">{generalName}</TextInput>
                    {/* Will need to work on this */}
                    <TextInput style = {styles.input} 
                        onChangeText={setMonsters} 
                        placeholder="Monsters" 
                    />
                    <View style = {styles.rateRank}>
                        <TextInput 
                            style = {styles.rateRankInput} 
                            onChangeText={(value) => setMinWorldRank(Number(value))} 
                            placeholder="Min. World Rank" 
                            keyboardType='decimal-pad'
                        />
                        <TextInput 
                            style = {styles.rateRankInput} 
                            onChangeText={(value) => setDropRate(Number(value))} 
                            placeholder="Drop Rate" 
                            keyboardType='decimal-pad'
                        />
                    </View>
                    {/* Picker */}
                    <Picker
                        style = {styles.picker}
                        selectedValue={rarity}
                        mode = 'dropdown'
                        onValueChange={(itemValue, itemIndex) =>
                            setRarity(itemValue)
                        }>
                        <Picker.Item label="Rarity..." value="grey" enabled = {false}/>
                        <Picker.Item label="Grey" value="grey" />
                        <Picker.Item label="Green" value="green" />
                        <Picker.Item label="Blue" value="blue" />
                        <Picker.Item label="Purple" value="purple" />
                    </Picker>

                    {/* Submit Button */}
                    <TouchableOpacity style = {styles.buttons} onPress = {submit}>
                        <Text style = {styles.btnText}>Submit</Text>
                    </TouchableOpacity>
            </ImageBackground>
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
        backgroundColor: '#DDFFFD',
        opacity: 0.9,
        padding: '2%',
        margin: '2%',
        borderRadius: 1000/2,
    },

    rateRank: {
        flexDirection: 'row',
        alignSelf: 'center',
    },

    rateRankInput: {
        fontSize: 20,
        backgroundColor: '#DDFFFD',
        opacity: 0.9,
        padding: '2%',
        margin: '2%',
        borderRadius: 1000/2,
        width: '40%',
        textAlign: 'center',
    },

    picker: {
        marginTop: '-5%',
    },

    buttons: {
        backgroundColor: '#01CDD9',
        borderRadius: 1000/2,
        alignSelf: 'center',
        padding: '3%',
        marginVertical: '2%',
        marginBottom: '3%',
    },

    btnText: {
        textAlign: 'center',
        fontSize: 22,
        color: 'white',
    }
})

export default AddDrop;