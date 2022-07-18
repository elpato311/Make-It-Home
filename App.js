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
const Stack = createNativeStackNavigator();


export default function App() {
  useDeviceContext(tw);
  return (
    <NavigationContainer>
      <Header />
        <Stack.Navigator>
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Paint Calculator" component={PaintCalculator} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
