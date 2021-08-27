import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import AddDrop from "../screens/AddDrop";
import AllDrops from "../screens/AllDrops";
import ViewDrop from "../screens/ViewDrop";
import EditDrop from "../screens/EditDrop";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetAllDrops } from "../redux/actions/genshin-actions";

const Stack = createStackNavigator();

const RootStack = () => {
    // Load in Item Drops to Redux Store
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetAllDrops());
    }, [dispatch]);

    return(
        <Stack.Navigator
            initialRouteName='AllDrops'
            screenOptions={{
                //headerShown: 'false',
                headerTitleAlign: 'center',
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            {/* Main Screen */}
            <Stack.Screen
                name='AllDrops'
                component={AllDrops}
                options={{
                    headerShown: true,
                    title: 'All Item Drops',
                    headerTitleStyle: {
                        color: 'black', 
                    },
                }}
            />
            {/* Main Screen -> Add Drop Screen */}
            <Stack.Screen
                name='AddDrop'
                component={AddDrop}
                options={{
                    headerShown: true,
                    title: 'Add a Drop',
                    headerTitleStyle: {
                        color: 'black', 
                    },
                }}
            />
            {/* Main Screen -> View Drop Screen */}
            <Stack.Screen
                name='ViewDrop'
                component={ViewDrop}
                options={{
                    headerShown: true,
                    title: 'View Item Drop',
                    headerTitleStyle: {
                        color: 'black',
                    },
                }}
            />
            {/* Main Screen -> View Drop Screen -> Edit Drop Screen */}
            <Stack.Screen
                name='EditDrop'
                component={EditDrop}
                options={{
                    headerShown: true,
                    title: 'Edit Item Drop',
                    headerTitleStyle: {
                        color: 'black',
                    },
                }}
            />
        </Stack.Navigator>
    )
}

export default RootStack;