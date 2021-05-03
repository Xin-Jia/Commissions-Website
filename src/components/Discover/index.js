import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
import { DiscoverContainer, DiscoverH1, DiscoverIcon, DiscoverWrapper }
    from './DiscoverElements';
import Icon1 from '../../images/img1.png';
import Icon2 from '../../images/img2.png';
import Icon3 from '../../images/img3.png';

const Discover = () => {
    return (
        <DiscoverContainer id='discover'>
            <DiscoverH1>Discover</DiscoverH1>
            <DiscoverWrapper>
                <Carousel>
                    <div>
                        <DiscoverIcon src={Icon1} />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <DiscoverIcon src={Icon2} />
                    </div>
                    <div>
                        <DiscoverIcon src={Icon3} />
                    </div>
                </Carousel>
            </DiscoverWrapper>
        </DiscoverContainer>
    )
}

export default Discover;
