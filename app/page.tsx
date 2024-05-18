import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ForWho from "@/components/ForWho";
import PracticeLesson from "@/components/PracticeLesson";
import Price from "@/components/Price";
import Articles from "@/components/Articles";
import Faq from "@/components/Faq";
import Indicators from "@/components/Indicators";
import Ending from "@/components/Ending";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <About />
      <ForWho />
      <PracticeLesson />
      <Price />
      <Articles />
      <Faq />
      <Indicators />
      <Ending />
      <Footer />
    </div>
  );
}
