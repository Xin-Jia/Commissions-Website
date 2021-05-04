import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
import { DiscoverContainer, DiscoverH1, DiscoverIcon, DiscoverWrapper }
    from './DiscoverElements';
import Icon1 from '../../images/img1.png';
import Icon2 from '../../images/img2.png';
import Icon3 from '../../images/img3.png';
import Icon4 from '../../images/img4.png';
import Icon5 from '../../images/img5.png';
import Icon6 from '../../images/img6.png';
import Icon7 from '../../images/img7.png';


const Discover = () => {
    return (
        <DiscoverContainer id='discover'>
            <DiscoverH1>Discover</DiscoverH1>
            <DiscoverWrapper>
                <Carousel>
                    <div>
                        <DiscoverIcon src={Icon1} alt="img1" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <DiscoverIcon src={Icon2} alt="img2" />
                    </div>
                    <div>
                        <DiscoverIcon src={Icon3} alt="img3" />
                    </div>
                    <div>
                        <DiscoverIcon src={Icon4} alt="img4" />
                    </div>
                    <div>
                        <DiscoverIcon src={Icon5} alt="img5" />
                    </div>
                    <div>
                        <DiscoverIcon src={Icon6} alt="img6" />
                    </div>
                    <div>
                        <DiscoverIcon src={Icon7} alt="img7" />
                    </div>
                </Carousel>
            </DiscoverWrapper>
        </DiscoverContainer>
    )
}

export default Discover;
