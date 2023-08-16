import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";


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
                    name="About"
                    // options={{ headerStyle: { backgroundColor: '#eee' } }}
                    component={About} />

            </Stack.Navigator>

        // </NavigationContainer >
    )
}

export { AboutStack };