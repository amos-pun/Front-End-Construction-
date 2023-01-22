import React from "react";

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide bg-secondary">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="./Image/Road.jpg" className="d-block w-75 m-auto" style={{height:'630px'}} alt="pic" />
                <div className="carousel-caption d-none d-md-block">
                <h5>Thali, Kathmandu</h5>
                <p>
                    Recently paved road.
                </p>
                </div>
            </div>

            <div className="carousel-item ">
                <img src="./Image/Bu-house.jpg" className="d-block w-75 m-auto" style={{height:'630px'}} alt="pic" />
                <div className="carousel-caption d-none d-md-block">
                <h5>
                Construction complete in 2021
                </h5>
                <p>Budhanilkhanta, Kathmandu
                </p>
                </div>
            </div>
            <div className="carousel-item ">
                <img src="./Image/Kapan.jpg" className="d-block w-75 m-auto" style={{height:'630px'}} alt="pic" />
                <div className="carousel-caption d-none d-md-block">
                <h5> 
                Beersheba Construction and Housing Pvt. Ltd. Team
                </h5>
                <p>Kapan, Kathmandu
                </p>
                </div>
            </div>
        </div>
        
        <button
          className="carousel-control-prev bg-dark" 
          style={{width:"80px", height:"100px", top:"40%", left:"50px"}}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next bg-dark"
          style={{width:"80px", height:"100px", top:"40%", right:"50px"}}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
