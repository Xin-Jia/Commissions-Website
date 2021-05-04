import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,
    FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink >How it works</FooterLink>
                            <FooterLink >Testimonials</FooterLink>
                            <FooterLink >Investors</FooterLink>
                            <FooterLink >Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Me</FooterLinkTitle>
                            <FooterLink >Contact</FooterLink>
                            <FooterLink >Support</FooterLink>
                            <FooterLink >Destinations</FooterLink>
                            <FooterLink >Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            PHELIA
                        </SocialLogo>
                        <WebsiteRights>PHELIA © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
