import React, { Component } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import sl1 from "../assets/sl1.jpg";
import sl2 from "../assets/sl2.jpg";
import sl3 from "../assets/sl3.jpg";
import sl4 from "../assets/sl4.jpg";
import sl5 from "../assets/sl5.jpg";
import sl6 from "../assets/sl6.jpg";
import CarouselCaption from "react-bootstrap/CarouselCaption";

class CarouselBox extends Component {
  render() {
    return (
      <>
        <Carousel className="t-1">
          <CarouselItem>
            <img src={sl1} alt="img1" className="d-block w-100" height="700" />
            <CarouselCaption>
              <h3>First slide</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <img src={sl2} alt="img2" className="d-block w-100" height="700" />
            <CarouselCaption>
              <h3>Second slide</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <img src={sl3} alt="img2" className="d-block w-100" height="700" />
            <CarouselCaption>
              <h3>third slide</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <img src={sl4} alt="img2" className="d-block w-100" height="700" />
            <CarouselCaption>
              <h3>fourth slide</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <img src={sl5} alt="img2" className="d-block w-100" height="700" />
            <CarouselCaption>
              <h3>fifth slide</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <img src={sl6} alt="img2" className="d-block w-100" height="700" />
            <CarouselCaption>
              <h3>Sixth slide</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
            </CarouselCaption>
          </CarouselItem>
        </Carousel>
      </>
    );
  }
}

export default CarouselBox;
