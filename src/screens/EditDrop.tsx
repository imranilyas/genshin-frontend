import React, {useState} from "react";
import {TextInput, Text, View, StyleSheet, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/stackTypes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import IItem from "../entities/item";
import { updateDrop } from "../redux/actions/genshin-actions";
import Toast from "react-native-toast-message";
import { Picker } from "@react-native-picker/picker";
import { Dark } from "../styles/style";

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

    // Background Image
    const image = {uri: Dark.imageEdit}

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
        if(dropName && photo && generalName && monsters && minWorldRank && dropRate && rarity) {
            Toast.show({
                type: 'success',
                position: 'top',
                text1: 'Success!',
                text2: `${dropName} has been updated.`
            })
            dispatch(updateDrop(item)); 
            navigation.goBack();
        }
        else {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Update Failed...',
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
                 {/* Picker */}
                 <Picker
                        style = {styles.picker}
                        itemStyle = {styles.pickerItems}
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

                <TextInput style = {styles.input} onChangeText={setDropName} placeholder="Item Drop Name">{dropName}</TextInput>
                <TextInput style = {styles.input} onChangeText={setPhoto} placeholder="Item Drop Image URL">{photo}</TextInput>
                <TextInput style = {styles.input} onChangeText={setGeneralName} placeholder="Item Group Name">{generalName}</TextInput>
                {/* Will need to work on this */}
                <TextInput style = {styles.input} onChangeText={setMonsters} placeholder="Monsters">{monsters}</TextInput>
                

                <View style = {styles.rateRank}>
                        <TextInput 
                            style = {styles.rateRankInput} 
                            onChangeText={(value) => setMinWorldRank(Number(value))} 
                            placeholder="Min. World Rank" 
                            keyboardType='decimal-pad'
                        >
                            {minWorldRank}
                        </TextInput>
                        <TextInput 
                            style = {styles.rateRankInput} 
                            onChangeText={(value) => setDropRate(Number(value))} 
                            placeholder="Drop Rate" 
                            keyboardType='decimal-pad'
                        >
                            {dropRate}
                        </TextInput>
                </View>
                   
                {/* Submit Button */}
                <TouchableOpacity style = {styles.buttons} onPress = {update}>
                    <Text style = {styles.btnText}>Update</Text>
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
        width: '25%',
        textAlign: 'center',
    },

    picker: {
        //marginTop: '-5%',
        //alignSelf: 'center',
        color: 'black',
        margin: '2%',
        backgroundColor: '#DDFFFD',
        borderRadius: 1000/2,
    },

    pickerItems: {
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        borderRadius: 1000/2,

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
    },
})

export default EditDrop;