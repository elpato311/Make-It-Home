import { View, ImageBackground } from 'react-native';
import Categories from '../component/Categories';
import Sale from '../component/Sale';
import tw from 'twrnc';
import { ScrollView, Dimensions } from 'react-native';
import { useRef } from "react";

const Wall = () => {
  return (
    <View>
      <ImageBackground source={require('../assets/spp.jpg')} resizeMode="cover" style={tw`pb-16 mr-5 h-58 w-400 `}></ImageBackground>
    </View>
  )
}

function Header() { }

export default function Products() {
  const prods = [
    {
      name: 'Candles',
      imageUrl: require('../assets/candles.avif'),
      price: '10'

    },
    {
      name: 'Wall Clock',
      imageUrl: require('../assets/wall-clock.avif'),
      price: '15$'

    },
    {
      name: 'Flowers',
      imageUrl: require('../assets/flowes.avif'),
      price: '9$'
    },
    {
      name: 'Butterflies',
      imageUrl: require('../assets/butt.avif'),
      price: '5$'

    },
    {
      name: 'Anledning Decoration',
      imageUrl: require('../assets/anledning.avif'),
      price: '7$'

    },
    {
      name: 'Portrait',
      imageUrl: require('../assets/portrait.avif'),
      price: '6'

    },
    {
      name: 'LED Lightning',
      imageUrl: require('../assets/Led.avif'),
      price: '7'

    },
    {
      name: 'Memo Board',
      imageUrl: require('../assets/memo-board.avif'),
      price: '18'

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
        <Sale prods={prods} />;
        <Categories items={items} />;
    </View>
  );
}
