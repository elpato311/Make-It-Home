import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './screens/About';
import Products from './screens/Products';
import PaintCalculator from './screens/PaintCalculator';
import Header from './component/Header';
import Categories from './component/Categories';
import tw, { useDeviceContext } from 'twrnc';
import Footer from './component/Footer';
const Stack = createNativeStackNavigator();


export default function App() {
  useDeviceContext(tw);
  return (
    <NavigationContainer>
      <Header />
        <Stack.Navigator>
        <Stack.Screen name="Products">
           {(props) => <Products {...props} />}
           </Stack.Screen>
          <Stack.Screen name="About">
           {(props) => <Products {...props} />}
          </Stack.Screen>   
          <Stack.Screen name="PaintCalculator" component={PaintCalculator} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
