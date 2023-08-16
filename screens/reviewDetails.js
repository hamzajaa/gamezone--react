import { Button, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { globalStyle } from "../styles/global";

export default function ReviewDetails({ navigation, route }) {

    return (
        <View style={globalStyle.container}>
            <Text>{ route.params.title }</Text>
            <Text>{ route.params.body }</Text>
            <Text>{ route.params.rating }</Text>
        </View>
    )
}
