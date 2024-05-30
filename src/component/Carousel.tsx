import React from 'react';
import './carousel.scss';
const Carousel = () => {
  return (
    <div className="container">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../../public/img-header/banner-4.jpg" className="d-block w-100" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src="../../public/img-header/banner-1.jpg" className="d-block w-100" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src="../../public/img-header/banner-3.jpg" className="d-block w-100" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img src="../../public/img-header/banner-2.jpg" className="d-block w-100" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img src="../../public/img-header/banner-5.jpg" className="d-block w-100" alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
