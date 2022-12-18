import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../index.css";

function Corousel() {
  return (
    <Carousel controls="false">
      <Carousel.Item>
        <div className="testimonialMainDiv">
          <div className="testimonialDiv ">
            <h2>this is a name</h2>
            <p>
              this is a testimonial by a user and he/she likes this website so
              much
            </p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="testimonialDiv">
          <h2>this is a name</h2>
          <p>
            this is a testimonial by a user and he/she likes this website so
            much
          </p>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="testimonialDiv">
          <h2>this is a name</h2>
          <p>
            this is a testimonial by a user and he/she likes this website so
            much
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousel;
