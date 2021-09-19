import React from "react";
import Footer from "../layout/Footer";
import HeaderContactUs from "../layout/HeaderContactUs";
import ContactUsContainer from "./ContactUsContainer";

function ContactUs() {
  return (
    <div>
      <HeaderContactUs />
      <div className="pb-3  bg-grey">
        <ContactUsContainer />
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
