import { View, Text, Pressable } from "react-native"
import tw from 'twrnc';

import { Picker } from '@react-native-picker/picker';
import { TextInput } from "react-native";


export default function Calculator() {
  return (
    <View style={tw`  shadow-lg   border-2 border-gray-300 m-10 p-40 items-center bg-white   `}>


      <Text style={tw`  pr-66 pb-2 `}>Wall Type</Text>
      <Picker style={tw`  w-80 h-10 border-gray-300	  `}

        onValueChange={(value) => console.log(value)}
      >

        <Picker.Item label="Exterior" value="Exterior" />
        <Picker.Item label="Interior" value="Interior" />


      </Picker >

      <Text style={tw`  pr-66 pb-2 `}>Products</Text>

      <Picker style={tw`  w-80 h-10  border-gray-300	 `}

        onValueChange={(value) => console.log(value)}
      >

        <Picker.Item label="Couch Primer" value="Couch Primer" />
        <Picker.Item label="Geltex-20000" value="Geltex-20000" />
        <Picker.Item label="Geltex-25000" value="Geltex-25000" />


      </Picker >

      <View style={tw`flex-row mt-2`}>
        <View>
          <Text style={tw` mb-1`}>Height</Text>
          <TextInput style={tw`h-8 border border-gray-300	 bg-white w-39 mr-2 bg `} placeholder='' />
        </View>
        <View>
          <Text style={tw` mb-1`}>Width</Text>
          <TextInput style={tw`h-8 border border-gray-300	bg-white  w-39  `} placeholder='' />
        </View>
      </View>
      <View>
        <Text style={tw` mb-1`}>Number of Walls</Text>
        <TextInput style={tw`h-8 border w-40 border-gray-300 bg-white w-40 mr-40 `} placeholder='' />
      </View>
      <View style={tw`flex-row mt-4`} >
        <Pressable>
          <Text style={tw`h-8 border text-white bg-red-400	text-center border-gray-300	 w-50 pl-2 mr-2 pr-8 `} >Calculate</Text>
        </Pressable>
        <Pressable >
          <Text style={tw`h-8 border w-20 bg-stone-50 border-gray-300	 pl-2 mr-2 pr-8 `} >Clear</Text>
        </Pressable>
      </View>


    </View>)
}