import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleService from "../../components/PageTitle/PageTitleService";
import FooterOne from "../../components/Footer/FooterOne";
import TabsDefault from "../../components/Tabs/TabsDefault";

const ServiceSimple = () => (
  <Loader>
    <HeaderOne />
    <PageTitleService title="Servicios" tagline="Conoce nuestros servicios" />
    <TabsDefault />
    <FooterOne />
  </Loader>
);

export default ServiceSimple;
