import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Features from "@/components/Features";
import HighLight from "@/components/HighLight";
import Newsletter from "@/components/Newsletter";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";




export default function Home() { 
  return (
  <div>
    <Banner />
    <Features />
     <Featured />
     <Testimonial></Testimonial>
      <HighLight></HighLight>
     <Newsletter></Newsletter>     
    
    <Stats />   
  </div>
  );
}
