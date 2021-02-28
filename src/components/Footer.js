import React from 'react';
import styled from 'styled-components';
import {FiTwitter} from 'react-icons/fi';
import {FiFacebook} from 'react-icons/fi';
import {FiInstagram} from 'react-icons/fi';


const MainFooter = styled.footer`
  background: #18181a;
  color: #fff;
  width: 100vw;
  display: block;
  overflow: hidden;
  padding: 70px 0;
  box-sizing: border-box;
`;

const InnerFooter = styled.div`
  display: block;
  margin: 0 auto;
  width: 1100px;
  height: 100%;

  @media(max-width: 600px){
    width: 90%;
  }
`;

const Logo = styled.div`
  width: 35%;
  float: left;
  height: 100%;
  display: block;
  font-style: italic;
`;

const FooterThird = styled.div`
  width: calc(21.66666667% - 20px);
  margin-right: 10px;
  float: left;
  height: 100%;

  @media(max-width: 600px){
    width: 100%;
    margin-bottom: 30px;
  }

  &:last-child{
    margin-right: 0;
  }

  h1{
    font-size: 22px;
    display: block;
    width: 100%;
    margin-bottom: 20px;
  }

  p{
    font-size: 18px;
    display: block;
    width: 100%;
    font-weight: 200;
    padding-bottom: 5px; 
  }

  li {
    display: inline-block;
    padding: 0 5px;
    font-size: 20px;
    text-decoration: none;
  }

  span{
    font-size: 16px;
    font-weight: 200;
    display: block;
    width: 100%;
    padding-top: 20px;
  }

  a{
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <MainFooter id="contact">
      <InnerFooter>
        <Logo to="top">
          FUMES
        </Logo>
        <FooterThird>
          <h1>Need Help?</h1>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </FooterThird>
        <FooterThird>
          <h1>More</h1>
          <p>Brochures</p>
          <p>Free Quote</p>
        </FooterThird>
        <FooterThird>
          <h1>Follow Us</h1>
          <li><a href="#"><FiTwitter /></a></li>
          <li><a href="#"><FiFacebook /></a></li>
          <li><a href="#"><FiInstagram /></a></li>
          <span>
          © Fumes Real Estate Limited <br/>
          Lagos Nigeria dui ut ornare <br/>
          lectus sit amet est placerat in
          egestas erat
          </span>
        </FooterThird>
      </InnerFooter>
    </MainFooter>
  );
};

export default Footer;