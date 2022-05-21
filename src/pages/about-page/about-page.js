import UserImg from "../../resources/user.jpg";

import "./about-page.scss";

const AboutPage = () => {
  return (
    <div className="about-page">
      <p>Get an overview of the latest Spaceflight news, from various sources! Easily link your users to the right websites.</p>
      <span>Author</span>
      <img src={UserImg} className="about-page__avatar" alt="user" />
      <span>😢 Сrying cat</span>
    </div>
  );
};

export default AboutPage;
