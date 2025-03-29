import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faPaste } from "@fortawesome/free-solid-svg-icons";
import { faSafari } from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assests/image.png';

const PrevArrow = (props) => {
  const { onClick } = props;
  return <FaArrowLeft className="arrow left" onClick={onClick} />;
};

// Custom Right Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return <FaArrowRight className="arrow right" onClick={onClick} />;
};
const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />, // Custom right arrow
    prevArrow: <PrevArrow />, // Custom left arrow
  };
  

  const slides = [
    {
      id: 1,
      image: "https://www.whitevoids.com/web/image/834-62b713f7/abstract-1920x1080-blackboard-wallpaper-preview.webp",
      title: "Harness the Power of Intellectual Property",
      description:
        "PatSol delves into extensive patent literature to identify industry-specific solutions tailored to your needs...",
    },
    {
      id: 2,
      image: "https://www.whitevoids.com/unsplash/sfL_QOnmy00/835/library.jpg?unique=8cfc5263",
      title: "Unlock Innovation with AI-Powered Insights",
      description:
        "Our AI-driven tools help uncover strategies and technologies that can solve pressing industry challenges...",
    },
    {
      id: 3,
      image: "https://www.whitevoids.com/web/image/website.s_carousel_default_image_3",
      title: "Unloc Insights",
      description:
        "Our AI-driven tools help uncover strategies and technologies that can solve pressing industry challenges...",
    },
  ];

  return (
    <>
    {/* First div */}
      <div
        style={{
          padding: "50px",
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          color: "white",
          backgroundImage:
            "url('https://www.whitevoids.com/unsplash/2EJCSULRwC8/780/technology.jpg?unique=f2cc5fcc')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(8px)",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          paddingLeft: "10%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1 style={{ fontSize: "64px" }}>
          Let AI Solve Your Industry Problems
        </h1>
        <p style={{ fontSize: "18px" }}>
          Unlock the power of artificial intelligence to tackle your most
          complex challenges. PatSol leverages cutting-edge AI to analyze vast
          amounts of patent and scientific literature, delivering tailored
          solutions that drive innovation and efficiency.
        </p>
      </div>

      {/* Second Div */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          paddingLeft: "10%",
          zIndex: 1,
        }}
      >
        {/* Background Video Container */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            zIndex: -1,
          }}
        >
          <iframe
            title="PatSol Background Video"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "120vw", // Zoom in to remove black bars
              height: "120vh", // Ensure full coverage
              transform: "translate(-50%, -50%)", // Center the video
              objectFit: "cover",
              pointerEvents: "none",
            }}
            src="https://www.youtube-nocookie.com/embed/7Pj5NlnrxNQ?rel=0&autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=7Pj5NlnrxNQ&fs=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        {/* Text Content */}
        <h1 style={{ fontSize: "64px", textAlign: "center", width: "100%" }}>
          Seeking Solutions ?{" "}
        </h1>
        <p style={{ fontSize: "18px", textAlign: "center", width: "100%" }}>
          Look no further. Enter your industry-related problem and let
          Whitevoids AI do the heavy lifting.
          <br />
          Our AI-driven tool provides actionable insights and technical
          solutions, empowering you to stay ahead in a competitive landscape.
        </p>
      </div>

      {/* Third div */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          paddingLeft: "10%",
          zIndex: 1,
        }}
      >
        {/* Background Video Container */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            zIndex: -1,
          }}
        >
          <iframe
            title="PatSol Background Video"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "120vw", // Zoom in to remove black bars
              height: "120vh", // Ensure full coverage
              transform: "translate(-50%, -50%)", // Center the video
              objectFit: "cover",
              pointerEvents: "none",
            }}
            src="https://www.youtube-nocookie.com/embed/heooI43xzsU?rel=0&autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=heooI43xzsU&fs=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        {/* Text Content */}
        <h1
          style={{
            fontSize: "64px",
            textAlign: "center",
            width: "100%",
            color: "black",
          }}
        >
          PatSol
        </h1>
        <p
          style={{
            fontSize: "18px",
            textAlign: "center",
            width: "100%",
            color: "black",
          }}
        >
          Introducing PATSOL – your AI-powered partner in problem-solving and
          innovation.
        </p>
        <p
          style={{
            fontSize: "18px",
            textAlign: "center",
            width: "100%",
            color: "black",
          }}
        >
          PatSol is an advanced AI-based tool designed to extract solutions to
          complex industry problems by analyzing patent literature and other
          scientific sources. Whether
          <br /> you’re facing technical challenges, seeking competitive
          insights, or aiming to benchmark your progress, PatSol provides the
          answers you need.
        </p>
      </div>

      {/* Fourth div */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "50px",
          gap: "40px",
        }}
      >
        {/* Left Content */}
        <div style={{ flex: "1" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "Normal",
              marginLeft: "120px",
              color: "rgb(19,117,88)",
            }}
          >
            Why Choose. <br /> PatSol.
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              marginLeft: "120px",
              color: "#333",
            }}
          >
            <strong>Comprehensive Solutions:</strong> Get technical,
            competitive, and <br />
            benchmarking insights all in one place.
            <br />
            <br />
            <strong>Sustainable Approach:</strong> Beyond just technical
            solutions, PatSol is <br /> designed to offer sustainable and
            efficient ways to address your <br />
            challenges.
            <br />
            <br />
            <strong>Future-Ready:</strong> PatSol is continuously evolving to
            meet the <br /> demands of tomorrow’s industries.
          </p>
          <div
            className="s_hr pb32 pt4 "
            style={{ marginLeft: "120px", width: "550px" }}
            data-snippet="s_hr"
            data-name="Separator"
          >
            <hr className="w-50 mx-auto" />
          </div>
          <button
            style={{
              backgroundColor: "#16c79a",
              color: "white",
              fontSize: "24px",
              padding: "12px 24px",
              border: "none",
              borderRadius: "5px",
              marginTop: "20px",
              marginLeft: "120px",
              cursor: "pointer",
            }}
          >
            Start Now
          </button>
        </div>

        {/* Right Image Section */}
        <div
          style={{
            flex: "1",
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://www.whitevoids.com/unsplash/bcqDxjddPGk/820/biomedical.jpg?unique=6de3b834"
            alt="Microscope"
            style={{
              width: "450px",
              height: "700px",
              borderRadius: "10px",
              position: "relative",
              zIndex: 1,
            }}
          />
          <img
            src="https://www.whitevoids.com/unsplash/6xeDIZgoPaw/oil%20industry.jpg?unique=86f54a5d"
            alt="Factory"
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "10px",
              position: "absolute",
              bottom: "-40px",
              right: "520px",
              zIndex: 2,
            }}
          />
          <img
            src="https://www.whitevoids.com/web/image/website.s_banner_default_image_3"
            alt="Books"
            style={{
              width: "220px",
              height: "320px",
              borderRadius: "10px",
              position: "relative",
              top: "90px",
              right: "80px",
              zIndex: 2,
            }}
          />
        </div>
      </div>

      {/* Fifth div */}
      <div
        style={{
          backgroundColor: "rgb(184, 203, 230)",
          paddingTop: "140px",
          paddingBottom: "140px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "320px",
            gap: "40px",
          }}
        >
          <div className="flex flex-col items-center">
            <div
              style={{
                width: "50px",
                borderRadius: "12px",
                backgroundColor: "#20C997",
                padding: "20px",
                marginLeft: "142px",
              }}
            >
              <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
            </div>
            <h2 style={{ textAlign: "center" }}>Define Your Challenge</h2>
            <p
              className="text-lg font-semibold mt-2"
              style={{ textAlign: "center" }}
            >
              Clearly outline your industry-specific challenge. PatSol’s <br />
              advanced AI will analyze your input to identify key issues <br />
              and parameters, setting the stage for precise and effective <br />
              solutions.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div
              style={{
                width: "50px",
                borderRadius: "12px",
                backgroundColor: "#20C997",
                padding: "20px",
                marginLeft: "142px",
              }}
            >
              <FontAwesomeIcon icon={faSafari} size="3x" />
            </div>
            <h2 style={{ textAlign: "center" }}>
              Discover AI-Powered Solutions
            </h2>
            <p
              className="text-lg font-semibold mt-2"
              style={{ textAlign: "center" }}
            >
              Explore a range of AI-generated solutions tailored to your <br />{" "}
              problem. Each solution is backed by extensive patent and <br />{" "}
              scientific research, ensuring relevance and reliability.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div
              style={{
                width: "50px",
                borderRadius: "12px",
                backgroundColor: "#20C997",
                padding: "20px",
                marginLeft: "142px",
              }}
            >
              <FontAwesomeIcon
                className="items-center"
                icon={faPaste}
                size="3x"
              />
            </div>
            <h2 style={{ textAlign: "center" }}>Unlock Actionable Insights</h2>
            <p
              className="text-lg font-semibold mt-2"
              style={{ textAlign: "center" }}
            >
              Gain immediate access to detailed, AI-driven insights. <br />{" "}
              Download comprehensive reports that not only solve your <br />{" "}
              problem but also provide competitive and sustainable <br />{" "}
              strategies for long-term success.
            </p>
          </div>
        </div>
      </div>

      {/* Sixth div */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <img src={ExampleCarouselImage} alt="Umasge"/> 
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ExampleCarouselImage} alt="Umasge"/> 
      <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ExampleCarouselImage} alt="Umasge"/> 
      <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default Home;
