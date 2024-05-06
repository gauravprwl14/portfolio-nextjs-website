import React from "react";
import { HeroContent } from "@/components/Hero";
import { ProcessContent } from "@/components/Process";
import { AboutUs } from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ContactUs from "@/components/ContactUs";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full h-auto clear-both float-left -mt-20" id="home">
      <div className="w-full h-dvh relative clear-both float-left">
        <div className="bg-[url('/img/slider/light-bg.jpg')] absolute top-0 right-0 left-0 bottom-0 bg-no-repeat bg-center bg-cover">
          {children}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <Container>
      <HeroContent />

      <ProcessContent></ProcessContent>

      <AboutUs></AboutUs>
      <Portfolio></Portfolio>
      <ContactUs></ContactUs>
    </Container>
  );
};

export default Home;
