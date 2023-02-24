import React, { useRef } from "react";
import Loader from "./../../components/Loader/Loader";
import dataCreative from "../../data/Slider/creative-one-page-data.json";
import serviceOneImg from "../../assets/images/onepage-bg-left.jpeg";
import HeaderTwo from "../../components/Header/HeaderTwo";
import HeroSliderSection from "../../components/Hero/HeroSliderSection";
import OurServices from "../../components/OurServices/OurServices";
import Welcome from "../../components/WelcomeSection/Welcome";
import WhoWeAreTwo from "../../components/WhoWeAre/WhoWeAreTwo";
import ContactUs from "../../components/ContactUs/ContactUs";
import CTAOne from "../../components/CTA/CTAOne";
import FooterOne from "../../components/Footer/FooterOne";
import Map from "../../components/Maps/Map";

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
        Los contadores de JCMExpansion están altamente capacitados y tienen un amplio conocimiento de las leyes y regulaciones fiscales
        vigentes en su jurisdicción. También pueden brindar asesoramiento y orientación a sus clientes sobre cómo cumplir con sus obligaciones fiscales de manera efectiva y eficiente.
      </Welcome>
      <OurServices
        title="¿Qué hacemos?"
        tagline="CONOCE NUESTROS SERVICIOS"
        serviceImg={serviceOneImg}
        ref={service}
      />
      <CTAOne
        title="Let's write your story, together."
        tagline="Careers"
        bg="dark"
        textButton="Contáctanos"
        linkButton="!#"
      >
        Obtenga tranquilidad financiera y fiscal con los expertos contables de JCMExpansion,
        ¡deje que nuestra experiencia y conocimientos lo lleven al éxito!
      </CTAOne>

      <WhoWeAreTwo title="¿Quiénes Somos?" tagline="Confianza, excelencia, innovación" />
      <ContactUs ref={contact} />
      <section className="pb-0 pt-0 map-section" id='mobileshow'>
        <Map classAppend="wide" />
      </section>
      <FooterOne />
    </Loader>
  );
};

export default CreativeOnePage;
