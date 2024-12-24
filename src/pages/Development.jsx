import React from 'react'
import DevelopmentBanner from '../components/DevelopmentBanner'
import Faqs from "../components/Faqs"
import Innovative from "../components/Innovate"
import Sales from '../components/Sales'
import Develop from '../components/Develop'
import Backend from '../components/Backend'
import MobileDev from '../components/MobileDev'

const Development = () => {
  return (
    <main>
      <DevelopmentBanner />
      <Sales />
      <Develop /> 
      <Backend />
      <MobileDev />
      <Faqs hideGradient={true} />
      <Innovative />
    </main>
  )
}

export default Development