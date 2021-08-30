import { FontAwesome } from '@expo/vector-icons'; 
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

interface IRate {
    rate: string,
}

const Rating = (props: IRate) => {
    switch(props.rate.toLowerCase()) {
        case 'grey':
            return(
                <View style = {styles.rate}>
                    <FontAwesome name="star" size={38} style = {styles.star} />
                </View>
            )
        case 'green':
            return(
                <View style = {styles.rate}>
                    <FontAwesome name="star" size={38} style = {styles.star} />
                    <FontAwesome name="star" size={38} style = {styles.star} />
                </View>
            )
        case 'blue':
            return(
                <View style = {styles.rate}>
                    <FontAwesome name="star" size={38} style = {styles.star} />
                    <FontAwesome name="star" size={38} style = {styles.star} />
                    <FontAwesome name="star" size={38} style = {styles.star} />
                </View>
            )
        case 'purple':
            return(
                <View style = {styles.rate}>
                    <FontAwesome name="star" size={38} style = {styles.star} />
                    <FontAwesome name="star" size={38} style = {styles.star} />
                    <FontAwesome name="star" size={38} style = {styles.star} />
                    <FontAwesome name="star" size={38} style = {styles.star} />
                </View>
            )
        default:
            return(
                <View style = {styles.rate}>
                    <FontAwesome name="star" size={38} style = {styles.star} />
                    <FontAwesome name="star" size={38} style = {styles.star} />
                    <FontAwesome name="star" size={38} style = {styles.star} />
                    <FontAwesome name="star" size={38} style = {styles.star} />
                    <FontAwesome name="star" size={38} style = {styles.star} />
                </View>
            )
    }
}
const styles = StyleSheet.create({
    rate: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: '8%',
    },

    star: {
        paddingHorizontal: '1%',
        color: 'gold',
    }
})
export default Rating;