import React from "react";
import bgImage from "../assests/image.png";
import bgImage2 from "../assests/download2.jpg";

const Home = () => {
  return (
    <>
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
        <h1 style={{ fontSize: "84px" }}>
          Let AI Solve Your Industry Problems
        </h1>
        <p style={{ fontSize: "28px" }}>
          Unlock the power of artificial intelligence to tackle your most
          complex challenges. PatSol leverages cutting-edge AI to analyze vast
          amounts of patent and scientific literature, delivering tailored
          solutions that drive innovation and efficiency.
        </p>
      </div>
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
        <h1 style={{ fontSize: "84px", textAlign: "center", width: "100%" }}>
          Seeking Solutions ?{" "}
        </h1>
        <p style={{ fontSize: "28px", textAlign: "center", width: "100%" }}>
          Look no further. Enter your industry-related problem and let
          Whitevoids AI do the heavy lifting.
       <br/>
          Our AI-driven tool provides actionable insights and technical
          solutions, empowering you to stay ahead in a competitive landscape.
        </p>
      </div>
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
        <h1 style={{ fontSize: "84px", textAlign: "center", width: "100%" }}>
          PatSol
        </h1>
        <p style={{ fontSize: "28px", textAlign: "center", width: "100%" }}>
          Introducing PATSOL – your AI-powered partner in problem-solving and
          innovation.
        </p>
        <p style={{ fontSize: "28px", textAlign: "center", width: "100%" }}>
          PatSol is an advanced AI-based tool designed to extract solutions to
          complex industry problems by analyzing patent literature and other
          scientific sources. Whether you’re facing technical challenges,
          seeking competitive insights, or aiming to benchmark your progress,
          PatSol provides the answers you need.
        </p>
      </div>

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
              fontSize: "60px",
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
    </>
  );
};

export default Home;