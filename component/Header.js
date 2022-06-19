import { View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-web';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';

export default function Header() {
  return (
    <View style={tw`  pt-4 pl-8 flex-row  `}>
      <Image style={tw`w-5% h-full mt-.5  pl-8 ml-4`} resizeMode= '' source={require('./assets/logs.png')} />
     
      <TextInput
        style={tw`pl-2 rounded shadow-lg w-35% `}
        placeholder="Search for products.."
      />
      <View style={tw`w-3% pl-2 rounded shadow-lg bg-cyan-300 	`}>
        <FontAwesome style={tw`pt-1`} name="search" size={22} />
      </View>
      <View style={tw`w-3% pl-2 bg-cyan-300 shadow-lg rounded-xl ml-198`}>
        <FontAwesome style={tw`pt-1 `} name="shopping-cart" size={22} />
      </View>
      <View
        style={tw`p-2 ml-2 text-white rounded-lg shadow-lg w-5% bg-cyan-300		`}
      >
        <Text style={tw`text-white font-lg `}>Sign Up</Text>
      </View>
    </View>
  );
}
