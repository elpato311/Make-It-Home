import { View, Text, Image, ScrollView, TextInput} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import tw from 'twrnc';
import RNPickerSelect from 'react-native-picker-select';



export default function Sale({prods}) {
    return (
        <View style={tw`flex-row flex-wrap px-8 bg-white`}>
            <View
                style={tw`flex-row flex-wrap h-1 mt-8 text-2xl border-2 border-white border-none divide-y bg-slate-500 w-5/12 mx-6`}
            ></View>
            <Text style={tw`pt-4 text-xl text-semibold pb-16 text-center mx-4`}>
                Our Collections
            </Text>
            <View
                style={tw`flex-row flex-wrap h-1 mt-8 text-2xl text-center border-2 border-white border-none divide-y bg-slate-500 w-5/12 `}
            >
                 <View style={tw`  flex-row ml-42 mt-4   `}>
                <TextInput style={tw`h-4.75 border mt-5 px-12 text-center `} placeholder= 'Search for items'/>
            
                <View style={{height: 80, width:100, marginTop: 20, paddingBottom: 40}}>
         <RNPickerSelect  
            onValueChange={(value) => console.log(value) } 
            
            items={[
                { label: 'Price: Low to High', value: 'Low Price ', height: 80, width:50, marginTop: 20, paddingBottom: 40  },
                { label: 'Price: High to Low', value: 'High Price ' },
                { label: 'Newest Arrivals', value: 'New' },
            ]}
            placeholder={{ label: " All ", value: "default" }} 
          
        />
    </View>
                 
               
              
         
                

               
                 </View>
                </View>
            
             {prods.map((product) =>{ return(
            <View style={tw` flex-wrap mt-4 pl-7`}>
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
    );
    
};


