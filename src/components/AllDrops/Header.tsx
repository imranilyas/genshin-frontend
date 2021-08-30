import React from "react";
import {Image, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/stackTypes";
import { StackNavigationProp } from "@react-navigation/stack";

const Header: React.FC = () => {
    // Navigation
    type main = StackNavigationProp<RootStackParamList, 'AllDrops'>
    const navigation = useNavigation<main>();
    const dispatch = useDispatch();

    return(
        <View>
            <Image 
                style = {styles.logo}
                source = {require('../../../assets/images/logo.png')}
            />
            <TouchableOpacity style = {styles.buttons} onPress={() => navigation.navigate('AddDrop')}>
                <Text style = {styles.btnText}>Add Item Drop</Text>
            </TouchableOpacity>
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
    }
})
export default Header;
