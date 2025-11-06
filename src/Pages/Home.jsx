import React from 'react'
import ImageSlider from '../Components/HeroSlidder'
import DestinationGrid from '../Components/DestinationGrid'
import WelcomeSection from '../Components/WelcomeSection'
import TourPackages from '../Components/TourPackages'
import WhyChooseUs from '../Components/WhyChooseUs'
import OfferFormSection from '../Components/OfferFormSection'

const Home = () => {
  return (
    <div>
        <ImageSlider/>        
        <DestinationGrid/>
        <WelcomeSection/>
        <TourPackages/>
        <WhyChooseUs/>
        <OfferFormSection/>
    </div>
  )
}

export default Home