import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/stackTypes";
import { useDispatch } from "react-redux";
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import IItem from "../../entities/item";
import { StackNavigationProp } from "@react-navigation/stack";

interface IProps {
    item: IItem,
}

const EachDrop: React.FC<IProps> = (props: IProps) => {
    type main = StackNavigationProp<RootStackParamList, 'AllDrops'>
    const navigation = useNavigation<main>();

    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.drop} onPress = {() => navigation.navigate('ViewDrop')}>
                <Image 
                    style = {styles.img}
                    source = {{
                        uri: props.item.photo
                    }}
                />
                <Text style = {styles.info}>{props.item.dropName}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: '2%',
    },

    img: {
        height: 150,
        width: 125,
    },

    info: {
        fontSize: 20,
        fontStyle: 'italic',
    },

    drop: {
        padding: '4%',
        flexDirection: 'row',
    }
})