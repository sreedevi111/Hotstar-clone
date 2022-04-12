import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
// carousel is a slideshow for cycling through a series of content
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
// to create carousel

function ImgSlider() {

    let settings = {
        dots: true,
        // to show dots 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay: true,
    }

  return (
    <Corousel {...settings}>
        <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="" />
      </Wrap>
     </Corousel>
  );
}

export default ImgSlider

const Corousel = styled(Slider)`
 margin-top: 15px;
 ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  //button's default color has been changed
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
    // to show little of adjacent pic
  }
  button {
    z-index: 1;
  }
`

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    bordr-radius: 6px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0 16px 10px -10px;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;