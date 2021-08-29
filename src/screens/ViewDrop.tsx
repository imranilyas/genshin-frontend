import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import IItem from "../entities/item";
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/stackTypes";
import { useNavigation } from "@react-navigation/native";
import { deleteDrop } from "../redux/actions/genshin-actions";

interface IProps {
    item: IItem,
}

const ViewDrop: React.FC<IProps> = (props: IProps) => {
    // Navigation
    type main = StackNavigationProp<RootStackParamList, 'AllDrops'>
    const navigation = useNavigation<main>(); 
    const dispatch = useDispatch();   

    //Delete handler
    const deleteItem = () => {
        dispatch(deleteDrop(props.item));
    }

    return (
        <View>
            <Text>View Specific Drop Screen</Text>
            <TouchableOpacity style = {styles.button} onPress = {deleteItem}>
                <Text style = {styles.buttonText}>Delete Drop</Text>    
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    button: {
        borderColor: 'red',
        borderWidth: 2,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'red',
    },
})

export default ViewDrop;