import Swiper from 'react-native-swiper/src'
import { View, ImageBackground } from 'react-native'
import tw from 'twrnc';
export default function Wall() {
    return (
        <View>
            <Swiper style={tw`pb-16 mr-5 h-70 w-full	`}>
                <ImageBackground source={require('../component/assets/bfdg.jpg')} resizeMode="cover" style={tw`pb-16 mr-5 h-70 w-full`}></ImageBackground>
                <ImageBackground source={require('../component/assets/bgg.jpg')} resizeMode="cover" style={tw`pb-16 mr-5 h-70 w-full`}></ImageBackground>
                <ImageBackground source={require('../component/assets/bffg.jpg')} resizeMode="cover" style={tw`pb-16 mr-5 h-70 w-full`}></ImageBackground>
            </Swiper>
        </View>

    )
}