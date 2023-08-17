import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutStack } from "./aboutStack";
import { HomeStack } from "./homeStack"
import { NavigationContainer } from "@react-navigation/native";


const Drawer = createDrawerNavigator();
const RootDraweNavigator = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }} >
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootDraweNavigator; 