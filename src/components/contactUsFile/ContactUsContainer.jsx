import React from "react";
import SocialMediaContact from "../paymentFile/SocialMediaContact";
import CustomerSupportSearch from "./CustomerSupportSearch";
import WaysToCOntact from "./WaysToCOntact";

function ContactUsContainer() {
  return (
    <div>
      <CustomerSupportSearch />
      <WaysToCOntact />
      <SocialMediaContact />
    </div>
  );
}

export default ContactUsContainer;
