import React from "react";
import {TextInput, Text, View, StyleSheet} from 'react-native';

const EditDrop: React.FC = () => {
    return (
        <View style = {styles.container}>
            <Text>Edit Drop Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default EditDrop;