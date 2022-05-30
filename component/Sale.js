import { View, Text, Image, ScrollView } from 'react-native';


import tw from 'twrnc';

export default function Sale({prods}) {
    return (
        <View style={tw`flex-row flex-wrap pl-16 bg-white`}>
            <View
                style={tw`flex-row flex-wrap h-1 mt-8 text-2xl border-2 border-white border-none divide-y bg-slate-500 w-150`}
            ></View>
            <Text style={tw`px-4 pt-4 text-xl text-semibold pb-6`}>
                Our Collections
            </Text>
            <View
                style={tw`flex-row flex-wrap h-1 mt-8 text-2xl text-center border-2 border-white border-none divide-y bg-slate-500 w-162`}
            ></View>
            
             {prods.map((product) =>{ return(
            <View style={tw` flex-wrap mb-4 pl-7`}>
                <Image source={product.imageUrl} style={tw` mx-2 h-64 w-78 rounded overflow-hidden shadow-lg `}/>
               <View style={tw``}>
               <Text style={tw`font-base text-lg mb-2 text-center mr-8 `}>{product.name}</Text>
               <Text style={tw`font-base text-lg text-center pb-2 mr-4`}>{product.price}</Text>
               <View style={tw` bg-violet-500 rounded mr-4 py-1 mb-4`}>
               <Text style={tw`  rounded text-center text-white`}>
                   Add to cart
               </Text>
               </View>
              </View>
             
            </View>
              )})}
              
              
        </View>
    );
    
};


