import { View, Text, Image, ScrollView, TextInput} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import tw from 'twrnc';
import {Picker} from '@react-native-picker/picker';


export default function Sale({prods}) {
    return (
        <View style={tw`flex-row flex-wrap px-8 bg-white`}>
            <View
                style={tw`flex-row flex-wrap h-1 mt-8 text-2xl border-2 border-white border-none divide-y bg-slate-500 w-5/12 mx-6`}
            ></View>
            <Text style={tw` text-xl text-semibold mt-4 mr-5 `}>
                Our Collections
            </Text>
            <View
                style={tw`flex-row flex-wrap h-1 mt-8 text-2xl border-2 border-white border-none divide-y bg-slate-500 w-5/12 `}
            >
                 <View style={tw`  flex-row ml-50 rounded

`}>
                <TextInput style={tw`h-8 border border-slate-500 mt-5 pl-2 mr-2 pr-8 rounded`} placeholder= 'Search for items...'/>
            
                <View  style={tw`  flex-row mt-5  `}>
                <Picker style={tw`  w-24 h-8 mr-2 rounded outline-slate-200`}
            onValueChange={(value) => console.log(value) } 

            >
                <Picker.Item label="Newest" value="New" />

            </Picker>

         <Picker style={tw`  w-24 h-8  rounded  `}
       
            onValueChange={(value) => console.log(value) } 
        >
              <Picker.Item label=" All" value="" />
              <Picker.Item label="Price: Low to High" value="Low Price" />
              <Picker.Item label="Price: High to Low" value="High Price" />
              <Picker.Item label="Newest Arrivals" value="New" />

            </Picker >
           
    </View>
                 
               
              
         
                

               
                 </View>
                </View>
            
             {prods.map((product) =>{ return(
            <View style={tw` flex-wrap mt-16 pl-7`}>
                <Image source={product.imageUrl} style={tw` items-center h-64 w-82 rounded overflow-hidden shadow-lg `}/>
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
    )
    
};

