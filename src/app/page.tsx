

import { 
  Nav, 
  Section, 
  ProcessMap, 
  Section1, 
  Story, 
  Testimonials, 
  Pricing, 
  Footer } from "./components";
import { Metadata } from "next";

export const metadata : Metadata ={
  title:'AutoApplys: AI Powered Job Applications'

}
export default function Home() {

  return (
  <main>
    <Nav/>

    <Section/>
    <Story/>
    <Section1/>
    <ProcessMap/>
    <Testimonials/>
    <Pricing/>
    <Footer/>
  </main>
  );
}
