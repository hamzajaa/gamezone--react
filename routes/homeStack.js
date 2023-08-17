import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../shared/header";

// const screens = {
//     Home: {
//         screen : Home
//     },
//     ReviewDetails:{
//         screen : ReviewDetails
//     }

// }

// const HomeStack = createStackNavigator(screens);

// export default createAppContainer(HomeStack);

const HomeStack = () => {
    const Stack = createStackNavigator();
    return (

        <Stack.Navigator

            initialRouteName="GameZone"
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: '#eee', height: 60
                    },
                    headerTintColor: '#444',
                }
            } >

            <Stack.Screen
                name="GameZone"
                options = { ({ navigation }) => {
                    return(
                        { header: () => <Header navigation={navigation} title='GameZone' /> }
                    )
                }}
                component={Home} />

            <Stack.Screen
                name="Review Details"
                // options={{ headerStyle: { backgroundColor: '#eee' } }}
                component={ReviewDetails} />

        </Stack.Navigator>

        // </NavigationContainer>
    )
}

export { HomeStack }