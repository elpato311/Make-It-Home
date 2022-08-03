import { View, Text, Pressable } from "react-native"
import tw from 'twrnc';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from "react-native";
import { useState } from "react";


export default function Calculator() {
  const[height, SetHeight] = useState('')
  const[width, setWidth]= useState('')
  const[Walls, setWall]= useState('')
  const[products, SetProducts]= useState('')
  return (
    <View style={tw`  shadow-lg   border-2 border-gray-300 m-10 px-3 py-22  items-center bg-white   `}>
      <View style={tw`w-full md:w-1/3`}>

        <Text style={tw`pb-2 `}>Wall Type</Text>
        <Picker style={tw`h-10 border-gray-300	  `}

          onValueChange={(value) => console.log(value)}
        >

          <Picker.Item label="Exterior" value="Exterior" />
          <Picker.Item label="Interior" value="Interior" />


        </Picker >

        <Text style={tw`pb-2 `}>Products</Text>

        <Picker style={tw` h-10  border-gray-300	 `}

          onValueChange={(value) => console.log(value)}
        >

          <Picker.Item label="Couch Primer" value="Couch Primer" />
          <Picker.Item label="Geltex-20000" value="Geltex-20000" />
          <Picker.Item label="Geltex-25000" value="Geltex-25000" />


        </Picker >

        <View style={tw`flex-row flex-wrap justify-between mt-2`}>
          <View style={tw`w-full md:w-48%`}>
            <Text style={tw` mb-1`}>Height</Text>
            <TextInput style={tw`h-8 border border-gray-300	 bg-white`} placeholder='' value= {height} onChangeText={num => SetHeight(num)} />
          </View>
          <View style={tw`w-full md:w-48%`}>
            <Text style={tw` mb-1`}>Width</Text>
            <TextInput style={tw`h-8 border border-gray-300	bg-white`} placeholder='' value= {width} onChangeText={meters => SetWidth(meters)} />
          </View>
        </View>
        <View style={tw` justify-center`}>
          <Text style={tw` mb-1`}>Number of Walls</Text>
          <TextInput style={tw`h-8 border  border-gray-300 bg-white  `}  placeholder='' value= {width} onChangeText={meters => SetWidth(meters)}  />
        </View>
        <View style={tw` mt-4 flex-row w-full justify-between `} >
          <Pressable style={tw`w-49% h-8 border items-center justify-center bg-red-400 border-gray-300`}>
            <Text style={tw`text-white`}>Calculate</Text>
          </Pressable>
          
          <Text style={tw`w-49% h-8 border  bg-stone-50  border-gray-300	text-center `} >Clear</Text>

        </View>
        <Text>SEE HOW MUCH PAINT YOU'LL NEED You need {} liters</Text>

      </View>
    </View>)
}