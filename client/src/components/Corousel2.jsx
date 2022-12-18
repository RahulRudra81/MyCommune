import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Corousel2() {
  return (
    <Carousel controls="false">
      <Carousel.Item>
        <img className="d-block w-100" src="2109.jpg" alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="2109.jpg" alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="2109.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousel2;
