import "../css/aboutus.css";

const Aboutus = () => {
    return (
        <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your trusted partner in innovation and growth</p>
      </div>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We aim to empower businesses by delivering cutting-edge solutions
            and unparalleled service quality. Our focus is on innovation,
            collaboration, and customer satisfaction.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To become a global leader in delivering transformative technology
            solutions that drive positive change and create value for all
            stakeholders.
          </p>
        </div>
      </div>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-img"
            />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-img"
            />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="team-img"
            />
            <h3>Emily Johnson</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </div>
    </div>
    );
}
export default Aboutus