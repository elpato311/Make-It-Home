import { View, ImageBackground } from 'react-native';
import Categories from '../component/Categories';
import Sale from '../component/Sale';
import tw from 'twrnc';
import { ScrollView, Dimensions } from 'react-native';
import { useRef } from "react";
import Footer from '../component/Footer';

const Wall = () => {
  return (
    <View>
      <ImageBackground source={require('../assets/ses.webp')} resizeMode="cover" style={tw`pb-16 mr-5 h-58 w-full`}></ImageBackground>
    </View>
  )
}



export default function Products() {
  const prods = [
    {
      name: 'Candles',
      imageUrl: require('../assets/candles.jpg'),
      price: '10$'

    },
    {
      name: 'Wall Clock',
      imageUrl: require('../assets/wall-clock.jpg'),
      price: '15$'

    },
    {
      name: 'Flowers',
      imageUrl: require('../assets/flowes.jpg'),
      price: '9$'
    },
    {
      name: 'Butterflies',
      imageUrl: require('../assets/butt.jpg'),
      price: '5$'

    },
    {
      name: 'Anledning Decoration',
      imageUrl: require('../assets/anledning.jpg'),
      price: '7$'

    },
    {
      name: 'Portrait',
      imageUrl: require('../assets/portrait.jpg'),
      price: '6$'

    },
    {
      name: 'LED Lightning',
      imageUrl: require('../assets/Led.jpg'),
      price: '7$'

    },
    {
      name: 'Memo Board',
      imageUrl: require('../assets/memo-board.jpg'),
      price: '18$'

    },
 
  ]
  const items = [
    {
      name: 'Bohemian',
      imageUrl: require('../component/assets/boho.webp'),
    },
    {
      name: 'Mid-century',
      imageUrl: require('../component/assets/mid-cen.jpg'),
    },
    {
      name: 'Scandinavian',
      imageUrl: require('../component/assets/scand.jpg'),
    },
    {
      name: 'Rustic',
      imageUrl: require('../component/assets/rustic.jpg'),
    },
    {
      name: 'Modern',
      imageUrl: require('../component/assets/modern.jpg'),
    },
    {
      name: 'Classic',
      imageUrl: require('../component/assets/classic.jpg'),
    },
  ];

  const scrollRef = useRef(null);

  return (
    <View>
        <Wall />
        <Sale prods={prods} />
        <Categories items={items} />
       <Footer />
    </View>
  );
}
