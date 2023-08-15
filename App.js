import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Home from './screens/home';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import {Navigator} from './routes/homeStack'

// const getFont = () => {
//   return Font.loadAsync({
//     'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
//     'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
//   })
// }


const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})


export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Home /> // 3- show Home screen
    );
  } else {
    return (
      <Home/>
      // <AppLoading
      //   startAsync={getFonts}// 1- wait to get fonts
      //   onFinish={() => setFontsLoaded(true)} // 2- set font
      //   onError={(err)=>console.log(err)}
      // />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
