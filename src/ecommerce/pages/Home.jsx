import { products } from '../../helpers/product';
import { comments } from '../../helpers/comments';

import { Footer, Navbar, Slider } from '../components'
import { SliderComment } from '../components/SliderComment'
import { SliderSection } from '../components/SliderSection'
import { SectionDiscount } from '../components/SectionDiscount';


export const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <SliderSection data={products} />
      <SectionDiscount />
      <SliderComment data={comments} />
      <Footer />
    </>
  )
}