import React, {useState, useEffect} from "react";
import { View, FlatList, StyleSheet, ImageBackground } from "react-native";
import EachDrop from "../components/AllDrops/EachDrop";
import IItem from "../entities/item";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../redux/state";
import { GetAllDrops } from "../redux/actions/genshin-actions";
import Header from "../components/AllDrops/Header";

const image = {uri: "https://i2.wp.com/www.alittlebithuman.com/wp-content/uploads/2021/06/genshin-impact-open-world-screenshot.jpg?resize=1170%2C700&ssl=1"}

const AllDrops: React.FC = () => {
    const items: IItem[] = useSelector(
        (state: IAppState) => state.items
    );

    const renderItem = ({item}: {item: IItem}) => {
        return <EachDrop item = {item}/>
    }

    const [fetching, setFetching] = useState(false);
    const [drops, setDrops] = useState<IItem[]>(items);

    // Actions
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
            <ImageBackground
                style = {styles.background}
                source = {image}
                resizeMode = "cover"
            >
                {/* Flatlist for All Drops */}
                <FlatList
                    onRefresh = {refresh}
                    refreshing = {fetching}
                    data = {drops}
                    renderItem = {renderItem}
                    keyExtractor = {(item) => item.dropName}
                    ListHeaderComponent = {Header}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default AllDrops;