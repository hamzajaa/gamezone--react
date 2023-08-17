import { Button, Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { globalStyle, images } from "../styles/global";
import Crad from "../shared/card";

export default function ReviewDetails({ navigation, route }) {
    const ratingNumber = route.params.rating ;
    return (
        <View style={globalStyle.container}>
            <Crad>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={images.ratings[ratingNumber]} />
                </View>
            </Crad>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})
