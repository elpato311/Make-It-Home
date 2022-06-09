import { View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-web';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';

export default function Header() {
  return (
    <View style={tw`flex-row flex-wrap pt-4 pl-8`}>
      <Image style={tw`w-23 h-9 mt-.5  pl-8 ml-4`} resizeMode= '' source={require('./assets/logs.png')} />
     
      <TextInput
        style={tw`pl-2 rounded shadow-lg w-90`}
        placeholder="Search for products.."
      />
      <View style={tw`w-10 pl-2 rounded shadow-lg bg-cyan-300			`}>
        <FontAwesome style={tw`pt-1`} name="search" size={22} />
      </View>
      <View style={tw`w-10 pl-2 bg-cyan-300		 shadow-lg rounded-xl ml-180`}>
        <FontAwesome style={tw`pt-1 `} name="shopping-cart" size={22} />
      </View>
      <View
        style={tw`p-2 ml-2 text-white rounded-lg shadow-lg w-18 bg-cyan-300		`}
      >
        <Text style={tw`text-white font-lg `}>Sign Up</Text>
      </View>
    </View>
  );
}
