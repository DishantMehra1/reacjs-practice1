import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrapper, SocailIcons, SocialLogo, SocailIconLink, WebsiteRights } from './footerElements'

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> About us</FooterLinkTitle>
                <FooterLink to="/signin">how it works</FooterLink>
                <FooterLink to="/signin">testimonials</FooterLink>
                <FooterLink to="/signin">carrers</FooterLink>
                <FooterLink to="/signin">investors</FooterLink>
                <FooterLink to="/signin">terms and conditions</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Videos</FooterLinkTitle>
                <FooterLink to="/signin">Submit video</FooterLink>
                <FooterLink to="/signin">Ambassadors</FooterLink>
                <FooterLink to="/signin">Agency</FooterLink>
                <FooterLink to="/signin">Influencer</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> Contact us</FooterLinkTitle>
                <FooterLink to="/signin">Contact</FooterLink>
                <FooterLink to="/signin">Support</FooterLink>
                <FooterLink to="/signin">Join us</FooterLink>
                <FooterLink to="/signin">Sponsorships</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Social Media</FooterLinkTitle>
                <FooterLink to="/signin">Instagram</FooterLink>
                <FooterLink to="/signin">Facebook</FooterLink>
                <FooterLink to="/signin">YouTube</FooterLink>
                <FooterLink to="/signin">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrapper>
              <SocialLogo to="/" onClick={toggleHome}>
                NET PAY
              </SocialLogo>
              <WebsiteRights> c {new Date().getFullYear()} All rights reserved</WebsiteRights>
              <SocailIcons>
                <SocailIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocailIconLink>
              </SocailIcons>
              <SocailIcons>
                <SocailIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocailIconLink>
              </SocailIcons>
              <SocailIcons>
                <SocailIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocailIconLink>
              </SocailIcons>
              <SocailIcons>
                <SocailIconLink href="/" target="_blank" aria-label="YouTube"><FaYoutube /></SocailIconLink>
              </SocailIcons>
              <SocailIcons>
                <SocailIconLink href="/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocailIconLink>
              </SocailIcons>
            </SocialMediaWrapper>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
