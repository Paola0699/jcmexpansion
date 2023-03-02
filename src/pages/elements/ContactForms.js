import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import ContactThree from "../../components/ContactUs/ContactThree";
import FooterOne from "../../components/Footer/FooterOne";

const ContactForms = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Contáctanos" />
    <ContactThree />
    <FooterOne />
  </Loader>
);

export default ContactForms;
