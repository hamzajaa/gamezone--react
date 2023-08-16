import { Button, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { globalStyle } from "../styles/global";

export default function ReviewDetails({ navigation }) {
    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={globalStyle.container}>
            <Text>ReviewDetails Screen</Text>
            <Button title='back to home screen' onPress={pressHandler} />
        </View>
    )
}
