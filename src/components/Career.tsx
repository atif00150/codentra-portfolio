import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>My Impact Meter </h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              Created high-quality videos, reels, and digital
              content for My Impact Meter, helping promote social impact
              campaigns through creative storytelling and professional video editing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing Officer</h4>
                <h5>My Impact Meter</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              Managed digital marketing, social media campaigns,
              and promotional content to enhance brand visibility
              and engage the target audience
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intarnship</h4>
                <h5>Encho Software</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              passionate about building modern web applications with clean code, responsive design, and optimized performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
