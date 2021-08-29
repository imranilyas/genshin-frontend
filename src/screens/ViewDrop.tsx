import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import IItem from "../entities/item";
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/stackTypes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { deleteDrop } from "../redux/actions/genshin-actions";

interface IProps {
    item: IItem,
}

const ViewDrop: React.FC = () => {
    // Navigation
    type main = StackNavigationProp<RootStackParamList, 'AllDrops'>
    const navigation = useNavigation<main>(); 
    const dispatch = useDispatch();
    
    // Route params
    const route = useRoute();
    const params = route.params as IItem;

    //Delete handler
    const deleteItem = () => {
        console.log(params.dropName);
        dispatch(deleteDrop(params));
        navigation.goBack();
    }

    return (
        <View>
            <Text>View Specific Drop Screen</Text>
            
            {/* Edit Button */}
            <TouchableOpacity style = {styles.blueBtn} onPress = {() => navigation.navigate('EditDrop', params)}>
                <Text style = {styles.blueBtnText}>Edit Drop</Text>    
            </TouchableOpacity>

            {/* Delete Button */}
            <TouchableOpacity style = {styles.redBtn} onPress = {deleteItem}>
                <Text style = {styles.redBtnText}>Delete Drop</Text>    
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    redBtn: {
        borderColor: 'red',
        borderWidth: 2,
    },

    blueBtn: {
        borderColor: 'blue',
        borderWidth: 2,
    },

    redBtnText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'red',
    },

    blueBtnText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'blue',
    },
})

export default ViewDrop;