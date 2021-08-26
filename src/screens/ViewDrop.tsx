import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ViewDrop: React.FC = () => {
    return (
        <View>
            <Text>View Specific Drop Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default ViewDrop;