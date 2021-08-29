import { useNavigation } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/stackTypes";
import EachDrop from "../components/AllDrops/EachDrop";
import IItem from "../entities/item";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../redux/state";
import { GetAllDrops } from "../redux/actions/genshin-actions";

const AllDrops: React.FC = () => {
    const items: IItem[] = useSelector(
        (state: IAppState) => state.items
    );

    const renderItem = ({item}: {item: IItem}) => {
        return <EachDrop item = {item}/>
    }

    const [fetching, setFetching] = useState(false);
    const [drops, setDrops] = useState<IItem[]>(items);

    // Navigation
    type main = StackNavigationProp<RootStackParamList, 'AllDrops'>
    const navigation = useNavigation<main>();
    const dispatch = useDispatch();

    // fetch data for refresh
    const fetch = () => {
        dispatch(GetAllDrops());
        setFetching(false);
    };

    const refresh = () => {
        setFetching(true);
        fetch();
    };

    useEffect(() => {
        setDrops(items);
    }, [items])

    return (
        <View style = {styles.container}>
            <Text>All Drops Screen</Text>

            {/* Add Drop Button */}
            <TouchableOpacity style = {styles.buttons} onPress={() => navigation.navigate('AddDrop')}>
                <Text>Add Item Drop</Text>
            </TouchableOpacity>

            {/* Flatlist for All Drops */}
            <FlatList
                onRefresh = {refresh}
                refreshing = {fetching}
                data = {drops}
                renderItem = {renderItem}
                keyExtractor = {(item) => item.dropName}
            />
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
        backgroundColor: 'grey',
    },
})

export default AllDrops;