import { products } from '../../helpers/product';
import { comments } from '../../helpers/comments';
import { Slider } from '../components'
import { SliderComment } from '../components/SliderComment'
import { SliderSection } from '../components/SliderSection'
import { SectionDiscount } from '../components/SectionDiscount';


export const Home = () => {
  return (
    <>
      <Slider />
      <SliderSection data={products} />
      <SectionDiscount />
      <SliderComment data={comments} />
    </>
  )
}
