"use client"
import React from 'react'
import styles from "./page.module.css";
import { LandingPageHeader } from './LandingPageHeader'
import HeroBullets from './HeroBullets'
import { FeaturesSection } from './FeatureSection'
import { LandingPageFooter } from './LandingPageFooter'
import { FaqSection } from './FaqSection'

function LandingPageWrapper() {
  return (
    <>
      <LandingPageHeader></LandingPageHeader>
      <HeroBullets></HeroBullets>
      <FeaturesSection></FeaturesSection>
      <FaqSection></FaqSection>
      <LandingPageFooter></LandingPageFooter>
  </>
  )
}

export default LandingPageWrapper