import { View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-web';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';

export default function Header() {
  return (
    <View style={tw`flex-row pt-4 pl-12`}>
      <Image style={tw`w-8 h-8 mt-.5 `} source={require('./assets/logo.png')} />
      <Text style={tw`pr-4 font-serif text-2xl font-bold text-violet-800`}>
        Artist
      </Text>
      <TextInput
        style={tw`pl-2 rounded shadow-lg w-90`}
        placeholder="Search for products.."
      />
      <View style={tw`w-10 pl-2 rounded shadow-lg bg-violet-600`}>
        <FontAwesome style={tw`pt-1`} name="search" size={22} />
      </View>
      <View style={tw`w-10 pl-2 bg-white shadow-lg rounded-xl ml-200`}>
        <FontAwesome style={tw`pt-1 `} name="shopping-cart" size={22} />
      </View>
      <View
        style={tw`p-2 ml-2 text-white rounded-lg shadow-lg w-18 bg-violet-600 `}
      >
        <Text style={tw`text-white font-lg `}>Sign Up</Text>
      </View>
    </View>
  );
}
