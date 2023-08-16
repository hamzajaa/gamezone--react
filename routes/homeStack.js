import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import { NavigationContainer } from "@react-navigation/native";

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
export default function HomeStack()  {
const Stack = createStackNavigator();
return (<NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator>
        {/* <Stack.Navigator initialRouteName="ReviewDetails">
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator> */}
    </NavigationContainer>
    )
}
