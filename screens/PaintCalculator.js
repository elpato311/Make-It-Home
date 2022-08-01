import { View, Text, Button } from 'react-native';
import Calculator from '../component/Calculator';
import Footer from '../component/Footer';
import Layout from '../component/Layout';


export default function PaintCalculator({ }) {
  return (
    <Layout>
      <Calculator />
    </Layout>
  );
}
