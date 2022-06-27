import { View, ImageBackground, Text} from "react-native"
import { TextInput } from "react-native-web"
import { FontAwesome } from '@expo/vector-icons';

import tw from 'twrnc'



export default function Footer(){
    return (
        <View style={tw` bg-slate-100 max-w-full		`}  >
              <ImageBackground style={tw` w-full h-58 py-16 bg-slate-100	`}     blurRadius={2} source= {require('../component/assets/news.jpg')} resizeMode="cover">
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
                  <View style={tw`border-lg `}> </View>
               </ImageBackground>

               <View style={tw`flex-row mt-8 bg-slate-100`}>
                <View style={tw`w-1/4 border-r border-stone-300	 h-42`}>
                    <Text style={tw`text-center font-bold text-violet-500 `}>Menu</Text>
                    <View style={tw`ml-42 my-4`}>
                    <Text style={tw` mb-2`}>FAQ</Text>
                    <Text style={tw` mb-2`}>Terms & Conditions</Text>
                    <Text style={tw` mb-2`}>Privacy Policy</Text>
                    <Text style={tw` mb-2`}>Shipping</Text>
                    </View>
               </View>
                 <View style={tw`w-2/4 border-r border-stone-300 h-42`}>
                    <Text style={tw`text-center font-bold text-violet-500	`}>Who We Are</Text>
                    <Text style={tw` ml-6 mt-4 text-center`}>Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                 </View >
               
               <View style={tw`w-1/4  h-42`}>
                <Text style={tw`ml-6 font-bold text-violet-500 `}>Contat Us</Text>
                <View style={tw` ml-6 mt-4`}>
                <Text style={tw` my-4`}>1 El Kamel Mohamed St. Zamalek – Cairo - Egypt</Text>
                <Text style={tw`mb-2`}>INVESTOR.RELATIONS@PHDINT.COM</Text>
                </View>
               </View>


               </View>

               <View style={tw`w-1/4 border-b border-stone-300  w-full mt-8 `}>
               </View>

               <View style={tw` bg-white pl-8 flex-row `}>
                <Text style={tw` bg-white pl-8 mr-230 `}>© Copyright 2022. All Rights Reserved.</Text>
                <FontAwesome style={tw`pt-1`} name="cc-mastercard" size={28} />
                <FontAwesome style={tw`pt-1 ml-2`} name="cc-visa" size={28} />
                <FontAwesome style={tw`pt-1 ml-2`} name="paypal" size={28} />
               

               </View>

        </View>
      
    )
    
}

