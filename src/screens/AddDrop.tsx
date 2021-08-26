import React from "react";
import { TextInput, Text, TouchableOpacity, StyleSheet, View } from "react-native";

const AddDrop: React.FC = () => {
    return(
        <View style = {styles.container}>
            <Text>Add Drop Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default AddDrop;