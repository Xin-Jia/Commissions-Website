import React from 'react';
import Icon1 from '../../images/headshot.png';
import Icon2 from '../../images/socialmedia.png';
import Icon3 from '../../images/family.png';
import { Button } from '../ButtonElements';
import { ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesWrapper, ServicesTextWrapper, ServicesP }
    from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard src={Icon1} alt="portrait">
                    <ServicesTextWrapper >
                        <ServicesH2>Portrait</ServicesH2>
                        <ServicesP>Get a new professional headshot which can be used on all platforms !</ServicesP>

                    </ServicesTextWrapper>
                </ServicesCard>
                <ServicesCard src={Icon2} alt="media">
                    <ServicesTextWrapper >
                        <ServicesH2>Social Media</ServicesH2>
                        <ServicesP>Capture better photos to grow your online presence ! </ServicesP>

                    </ServicesTextWrapper>
                </ServicesCard >
                <ServicesCard src={Icon3} alt="family">
                    <ServicesTextWrapper >
                        <ServicesH2>Family</ServicesH2>
                        <ServicesP>Do you need need new photos of your family ? </ServicesP>

                    </ServicesTextWrapper>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
