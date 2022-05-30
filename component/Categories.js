import { View, Text, ImageBackground, ScrollView } from 'react-native';
import tw from 'twrnc';
export default function Categories({ items }) {
  return (
    <View style={tw`flex-row flex-wrap px-8 bg-white`}>
      <View
        style={tw`flex-row flex-wrap h-1 mt-8 text-2xl text-center border-2 border-white border-none divide-y bg-slate-500 w-150`}
      ></View>
      <Text style={tw`px-4 pt-4 text-xl text-semibold`}>
        Most Popular Categories
      </Text>
      <View
        style={tw`flex-row flex-wrap h-1 mt-8 text-2xl text-center border-2 border-white border-none divide-y bg-slate-500 w-150`}
      ></View>


      <View style={tw`flex-row flex-wrap items-center pt-6`}>
        
        {items.map((item) => {
          return (
            <ImageBackground source={item.imageUrl} style={tw`mb-4 mr-5 h-58 w-56`}>
              <View
                style={tw`items-center mt-3 ml-3 border-4 opacity-75 border-gray-50 h-50 w-50`}
              >
                <Text
                  style={tw`mx-12 text-lg text-center text-bold mt-23 bg-gray-50`}
                >
                  {item.name}
                </Text>
              </View>
            </ImageBackground>
          )
        })}
       
      </View>
      
    </View>
  );
}
