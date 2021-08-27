import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import AddDrop from "../screens/AddDrop";
import AllDrops from "../screens/AllDrops";
import ViewDrop from "../screens/ViewDrop";
import EditDrop from "../screens/EditDrop";

const Stack = createStackNavigator();

const RootStack = () => {
    return(
        <Stack.Navigator
            initialRouteName='AllDrops'
            screenOptions={{
                //headerShown: 'false',
                headerTitleAlign: 'center',
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
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