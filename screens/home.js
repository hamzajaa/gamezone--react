import { Button, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { globalStyle } from "../styles/global";
import { useState } from "react";

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ])
    return (
        <View style={globalStyle.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={ () => navigation.navigate('Review Details', item)}>
                        <Text style={styles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {

    }
})