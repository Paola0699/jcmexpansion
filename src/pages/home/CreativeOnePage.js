import React, { useRef } from "react";
import Loader from "./../../components/Loader/Loader";
import dataCreative from "../../data/Slider/creative-one-page-data.json";
import serviceOneImg from "../../assets/images/onepage-bg-left.jpeg";
import HeaderTwo from "../../components/Header/HeaderTwo";
import HeroSliderSection from "../../components/Hero/HeroSliderSection";
import OurServices from "../../components/OurServices/OurServices";
import Welcome from "../../components/WelcomeSection/Welcome";
import WhoWeAreTwo from "../../components/WhoWeAre/WhoWeAreTwo";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import CounterOne from "../../components/Counters/CounterOne";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import PriceTablesTwo from "../../components/PriceTables/PriceTablesTwo";
import ContactUs from "../../components/ContactUs/ContactUs";
import CTAThree from "../../components/CTA/CTAThree";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";

const CreativeOnePage = () => {
  const home = useRef();
  const about = useRef();
  const service = useRef();
  const team = useRef();
  const work = useRef();
  const pricing = useRef();
  const contact = useRef();

  const scrollToSection = (e, content) => {
    e.preventDefault();
    switch (content) {
      case "home":
        home.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        about.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "service":
        service.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "team":
        team.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "work":
        work.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "pricing":
        pricing.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:

    }
  };

  return (
    <Loader>
      <HeaderTwo scrollToSection={scrollToSection} />
      <HeroSliderSection data={dataCreative} ref={home} />
      <Welcome title="Optimice su gestión contable" ref={about}>
        JCMExpansion es una empresa de contadores que se especializa en ofrecer servicios contables y fiscales a individuos y empresas.
        Los contadores de JCMExpansion estamos altamente capacitados y tienen un amplio conocimiento de las leyes y regulaciones fiscales
        vigentes en su jurisdicción. También pueden brindar asesoramiento y orientación a sus clientes sobre cómo cumplir con sus obligaciones fiscales de manera efectiva y eficiente.
      </Welcome>
      <OurServices
        title="¿Qué hacemos?"
        tagline="Conoce nuestros servicios"
        serviceImg={serviceOneImg}
        ref={service}
      />
      <WhoWeAreTwo title="¿Quienes Somos?" tagline="Confianza, excelencia, innovación" />
      <CounterOne type="wide" />
      <TestimonialsOne title="Testimonios" tagline="Happy clients" />
      <ContactUs ref={contact} />
      <CTAThree
        tagline="Let's Talk"
        title="Start a Project"
        textButton="Contáctanos"
        linkButton="!#"
        bg="dark"
      >
        Obtenga tranquilidad financiera y fiscal con los expertos contables de JCMExpansion, 
        <br />¡deje que nuestra experiencia y conocimientos lo lleven al éxito!
      </CTAThree>
      <FooterOne />
    </Loader>
  );
};

export default CreativeOnePage;
