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
                        <Text>Add Item Drop</Text>
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
        backgroundColor: 'grey',
    },
})
export default Header;
