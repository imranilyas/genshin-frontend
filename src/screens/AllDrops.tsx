import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/stackTypes";

const AllDrops: React.FC = () => {
    type main = StackNavigationProp<RootStackParamList, 'AllDrops'>
    const navigation = useNavigation<main>();

    //! to be removed
    const add = () => {
        navigation.navigate('AddDrop');
    }
    
    return (
        <View style = {styles.container}>
            <Text>All Drops Screen</Text>
            <TouchableOpacity style = {styles.buttons} onPress={() => navigation.navigate('AddDrop')}>
                <Text>Add Item Drop</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    list: {},
    buttons: {
        backgroundColor: 'black',
    },
})

export default AllDrops;