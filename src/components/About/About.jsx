import "./About.css";
import avatar from "../../assets/avatar.svg";

function About() {
  return (
    <div className="about">
      <img
        src={avatar}
        alt="picture of author: Caleb Campbell"
        className="about__avatar"
      />
      <div className="about__content">
        <div className="about__title">About the Author</div>
        <div className="about__descriptions">
          <div className="about__description">
            I’m Caleb Campbell, a full stack developer with a background in
            quality assurance and a degree in Computer Science.
          </div>
          <div className="about__description">
            Through the TripleTen bootcamp, I’ve gained hands-on experience with
            technologies like JavaScript, React, Node.js, and MongoDB. TripleTen
            has helped me grow as a problem-solver and a builder — and I’m
            excited to use those skills to help bring your ideas to life.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
