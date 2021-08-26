import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

const AllDrops: React.FC = () => {
    return (
        <View style = {styles.container}>
            <Text>All Drops Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    list: {},
})

export default AllDrops;