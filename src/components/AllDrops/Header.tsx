import React from "react";
import {Image, TouchableOpacity, View, Text, StyleSheet, TextInput} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/stackTypes";
import { StackNavigationProp } from "@react-navigation/stack";
import DarkMode from "./DarkMode";

const Header: React.FC = () => {
    // Navigation
    type main = StackNavigationProp<RootStackParamList, 'AllDrops'>
    const navigation = useNavigation<main>();

    const search = () => {
        // Searches for the drop using .filter or .includes
    }

    return(
        <View>
            <DarkMode />
            <Image 
                style = {styles.logo}
                source = {require('../../../assets/images/logo.png')}
            />
            <TouchableOpacity style = {styles.buttons} onPress={() => navigation.navigate('AddDrop')}>
                <Text style = {styles.btnText}>Add Item Drop</Text>
            </TouchableOpacity>
            {/* <TextInput style = {styles.searchbar} 
                placeholder = "Search Item Drops"
                placeholderTextColor = "white"
                textAlign = 'center'
                onSubmitEditing = {search}
            /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    logo: {
        height: 200,
        width: 200,
        alignSelf: 'center',
    },

    buttons: {
        backgroundColor: '#01CDD9',
        borderRadius: 1000/2,
        alignSelf: 'center',
        padding: '3%',
        marginBottom: '5%',
    },

    btnText: {
        textAlign: 'center',
        fontSize: 22,
        color: 'white',
    },

    searchbar: {
        backgroundColor: '#01CDD9',
        opacity: 0.8,
        borderRadius: 1000/2,
        marginBottom: '2%',
        marginHorizontal: '2%',
        fontSize: 22,
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        color: 'white',
    },
})
export default Header;
