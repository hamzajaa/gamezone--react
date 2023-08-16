import { Button, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { globalStyle } from "../styles/global";

export default function Home({ navigation }) {
const pressGandler = () => {
    // navigation.navigate('ReviewDetails');
    navigation.push('ReviewDetails');
}

    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>Home Screen</Text>
            <Button title='go to review dets'  onPress={pressGandler}/>
        </View>
    )
}
