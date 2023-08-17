import { StyleSheet, View } from "react-native";

export default function Crad(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {/* because i use this card in many component */}
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,   // the distance between the cards
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical:10,
    }
})