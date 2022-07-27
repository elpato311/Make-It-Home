import { View, Text, ImageBackground, ScrollView } from 'react-native';
import tw from 'twrnc';
export default function Categories({ items }) {
  return (

    <View style={tw`  max-w-full			`}>
      <View style={tw`  flex-row  	`}>
        <View
          style={tw` grow text-2xl mt-8 border-t-2 border-slate-200 `}
        ></View>
        <View style={tw`item-center `}>
          <Text style={tw`  grow text-xl text-center text-semibold mt-4`}>
            Most Popular Categories
          </Text>
        </View>

        <View
          style={tw`  grow text-2xl mt-8 border-t-2 border-slate-200 `}
        ></View>
      </View>


      <View style={tw`flex-row flex-wrap mt-8 justify-around		`}>

        {items.map((item) => {
          return (
            <ImageBackground source={item.imageUrl} style={tw`mb-12 mr-2 h-58 w-56`}>
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
  )
}
