import { View, Text, Image, ScrollView, TextInput} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import tw from 'twrnc';
import {Picker} from '@react-native-picker/picker';


export default function Sale({prods}) {
    return (
        <View style={tw`bg-white max-w-full `}>
            <View style={tw`flex-row justify-around`}>
            <View
                style={tw`flex-row flex-wrap h-1 mt-8  text-2xl border-t-2 border-slate-200 bg-white w-140`}
            ></View>
            <View style={tw`item-center `}>
      <Text style={tw`  text-xl text-center text-semibold mt-4`}>
        Our Collections
      </Text>
      </View>
            <View
                style={tw`flex-row flex-wrap h-1  mt-8 text-2xl  border-t-2 border-slate-200  bg-white w-140  `}

            >
                </View>
                </View>
                <View style={tw`flex-row mt-12 justify-end 	 `}>
                <TextInput style={tw`h-8 border border-slate-500  pl-2 mr-2 pr-8 rounded`} placeholder= 'Search for items...'/>
                <Picker style={tw`  w-24 h-8 mr-2 rounded outline-slate-200`}
            onValueChange={(value) => console.log(value) } 
            >
            <Picker.Item label="Newest" value="New" />

        </Picker>

     <Picker style={tw`  w-18 h-8  rounded  `}

        onValueChange={(value) => console.log(value) } 
    >
          <Picker.Item label=" All" value="" />
          <Picker.Item label="Price: Low to High" value="Low Price" />
          <Picker.Item label="Price: High to Low" value="High Price" />
          <Picker.Item label="Newest Arrivals" value="New" />

        </Picker >
                </View>
               <View style={tw` flex-wrap flex-row justify-around max-w-full`}>
            
             {prods.map((product) =>{ return(
            <View style={tw` flex-wrap mt-8 `}>
                <Image source={product.imageUrl} style={tw` h-64 w-78 flex-wrap rounded shadow-lg `}/>
               <View style={tw``}>
               <Text style={tw`font-base text-lg mb-2 text-center mr-8 `}>{product.name}</Text>
               <Text style={tw`font-base text-lg text-center pb-2 mr-4`}>{product.price}</Text>
               <View style={tw` bg-violet-500 rounded py-1  mb-4`}>
               <Text style={tw`  rounded text-center text-white`}>
                   Add to cart
               </Text>
               </View>
              </View>
             
            </View>
              )})}
              
              </View>
        </View>
    )
    
};

