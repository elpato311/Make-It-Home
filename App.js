import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './screens/About';
import Products from './screens/Products';
import PaintCalculator from './screens/PaintCalculator';
import tw, { useDeviceContext } from 'twrnc';
import Layout from './component/Layout';
const Stack = createNativeStackNavigator();


export default function App() {
  useDeviceContext(tw);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products">
          {(props) => <Products {...props} />}
        </Stack.Screen>
        <Stack.Screen name="About">
          {(props) => <Products {...props} />}
        </Stack.Screen>
        <Stack.Screen name="PaintCalculator">
          {(props) => <PaintCalculator {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
