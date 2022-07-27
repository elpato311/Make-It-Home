import { View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-web';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';

export default function Header() {
  return (
    <View style={tw`  pt-4  flex-row max-w-full		  `}>
      <Image style={tw`w-5% h-full pt-.5  pl-12 `} resizeMode='' source={require('./assets/logs.png')} />
      <View style={tw`grow flex-row`}>
        <TextInput
          style={tw`pl-2 rounded shadow-lg w-full md:w-8/12`}
          placeholder="Search for products.."
        />
        <View style={tw` px-1 rounded shadow-lg bg-cyan-300 items-center`}>
          <FontAwesome style={tw`pt-1 `} name="search" size={22} />
        </View>
      </View>
      <View style={tw`px-1 bg-cyan-300 shadow-lg rounded items-center hidden md:flex`}>
        <FontAwesome style={tw`pt-1 `} name="shopping-cart" size={22} />
      </View>
      <View
        style={tw`p-2 ml-2 text-white rounded-lg shadow-lg bg-cyan-300 hidden md:flex`}
      >
        <Text style={tw`text-white font-lg `}>Sign Up</Text>
      </View>

    </View>
  );
}
