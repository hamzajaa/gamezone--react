import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import RootDraweNavigator from "../routes/drawer";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
    const navigation = useNavigation();
    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                {/* this is the props.children */}
                <Text style={styles.headerText}>{ title }</Text> 
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    
    headerTitle: {
      flexDirection: 'row'  
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,

    },
})