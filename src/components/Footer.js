import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => {
    return (
      <FooterContainer>
        <FooterLinkWrapper>
          <FooterDesc>
            <h1>Traveler</h1>
            <p>We strive to create the best experience for our customer</p>
          </FooterDesc>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/support">Support</FooterLink>
            <FooterLink to="/destinations">Destinations</FooterLink>
            <FooterLink to="/sponsorshihps">Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/submitVideo">Submit Video</FooterLink>
            <FooterLink to="/ambassadors">Ambassadors</FooterLink>
            <FooterLink to="/agency">Agency</FooterLink>
            <FooterLink to="/influencers">Influencers</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/instagram">Instagram</FooterLink>
            <FooterLink to="/facebook">Facebook</FooterLink>
            <FooterLink to="/youtube">Youtube</FooterLink>
            <FooterLink to="/twitter">Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
      </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`
const FooterDesc = styled.div`
 padding: 0 2rem;
 
 h1{
     margin-bottom: 3rem;
     color: #f26a2e;
     font-weight: 200;
 }

 @media screen and (max-width: 400px){
   padding: 1rem;
 }
`
const FooterLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400){
      padding: 1rem;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 1rem;
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom:0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover{
      color: #f26a2e;
      transition: 0.15s ease-in-out
  } 
`