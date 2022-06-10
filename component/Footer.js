import { View, ImageBackground, Text} from "react-native"
import { TextInput } from "react-native-web"
import tw from 'twrnc'



export default function Footer(){
    return (
        <View >
              <ImageBackground style={tw` w-full h-58 py-16`} source= {require('../component/assets/news.avif')} resizeMode="cover">
                  <View style={tw`mb-72`}>
                  <Text style={tw` font-bold ml-124 text-4xl`} >Get Our Updates</Text>
                  <Text style={tw` flex-wrap ml-124 text-2xl mb-7`} >Join Over 1,000 people who get our free content</Text>
                  <View style={tw`flex-row pl-124 `}>
                  <TextInput style={tw`h-8 rounded-sm w-120 pl-2 bg-white  `} placeholder= 'Your email address'/>
                  <View style={tw`w-30 h-8 rounded-sm shadow-lg bg-cyan-300			`}>
                      <Text style={tw` py-1.5 px-5 `}>Subscribe</Text>

                  </View>
                  </View>
                  </View>
                  <View style={tw`border-lg `}> </View>;
               </ImageBackground>

      
         

        </View>
    )
    
}
 