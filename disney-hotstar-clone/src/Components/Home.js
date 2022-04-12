import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Veiwers from "./Veiwers";
//components from the home page
function Home() {
  return (
    <Container>
      <ImageSlider />
      <Veiwers />
      <Movies />
    </Container>
  );
}

export default Home;

//main content
const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  //adding background image
  &:before {
    //background : image position size  repeat attachment
    background: url("/images/home-background.png") center / cover no-repeat
      fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; //specifies the stack order of an element.
  }
`;