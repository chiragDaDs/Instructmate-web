"use client"
import Image from "next/image";
import "../global.css";
import { Fragment } from "react";
import styles from "./page.module.css";
import Calender from "../UI/calander/Calender";
import dayjs from "dayjs";
import CalenderContextWrapper from "../UI/calander/CalenderContextWrapper";
import HeroBullets from "./HeroBullets"
import { FeaturesSection } from "./FeatureSection";
import { LandingPageHeader } from "./LandingPageHeader";
import {FaqSection} from "./FaqSection";
import { LandingPageFooter } from "./LandingPageFooter";
export default function Home() {

  return (
  <>
      <LandingPageHeader></LandingPageHeader>
      <HeroBullets></HeroBullets>
      <FeaturesSection></FeaturesSection>
      <FaqSection></FaqSection>
      <LandingPageFooter></LandingPageFooter>
  </>
  );
}
