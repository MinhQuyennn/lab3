// Footer.js
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: rgb(70, 19, 160);
  color: white;
  padding: 2rem;
  text-align: center;
`;

const ContactInfo = styled.div`
  p {
    margin: 0.5rem 0;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Contact Information</h2>
      <ContactInfo>
        <p>Email: minhquyen5802@gmail.com</p>
        <p>GitHub: github.com/minhquyennn</p>
      </ContactInfo>
    </FooterWrapper>
  );
};

export default Footer;
