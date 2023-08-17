import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";
import Header from "../shared/header";


const AboutStack = () => {
    const Stack = createStackNavigator();
    return (
        // <NavigationContainer>

        <Stack.Navigator

            initialRouteName="Home"
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: '#eee', height: 60
                    },
                    headerTintColor: '#444'
                }
            } >

            <Stack.Screen
                name="About GameZone"
                options={({ navigation }) => {
                    return (
                        { header: () => <Header navigation={navigation} title='About GameZone' /> }
                    )
                }}
                // options={{ headerStyle: { backgroundColor: '#eee' } }}
                component={About} />

        </Stack.Navigator>

        // </NavigationContainer >
    )
}

export { AboutStack };