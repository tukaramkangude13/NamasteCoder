import React from 'react'
import { BODY_IMAGE } from './utils/images'
import Higlight from './Higlight'
import Culture from './Culture'
import WhyUnnati from './WhyUnnati'
import History from './History'
import Technologies from './Technologies '
import IndustryAssociationTestimonials from './IndustryAssociationTestimonials '
import Footer from './Footer'
const Body = () => {
  return (
    <><div className="w-full     h-full">
      <img 
        src={BODY_IMAGE} 
        alt="Body Background" 
        className="w-full h-full object-cover" 
      />
      <Higlight />
      <Culture/>
      <WhyUnnati/>
      <IndustryAssociationTestimonials/>
      <Technologies />

{/* <Footer/> */}
    </div></>
  )
}

export default Body
