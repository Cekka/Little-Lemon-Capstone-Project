import React from "react";
import AppWrap from "../../wrapper/AppWrap"
import ChefA from "../../images/ChefA.jpg"
import ChefB from "../../images/ChefB.jpg"
import './About.css';

const aboutData = {
    title: "About Little Lemon",
    subTitle: "Chicago",
    description:
    `We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.`,
    image1: ChefA,
    image2: ChefB,
};
const About = ()  => {
    return (
        <div
            className="app_about-section"
        >
            <div className="app_about-description-box">
                <h1 className="app__about-title">{aboutData.title}</h1>
                <br />
                <h4 className="app__about-subtitle">{aboutData.subTitle}</h4>
                <br />
                <p className="app__about-description">
                    {aboutData.description}
                </p>
            </div>
            <div className="app__about-image-holder">
                <div className="app__about-image-box img-box-1"
                    style={{
                        backgroundImage: `url(${aboutData.image2})`
                    }} />
                <div className="app__about-image-box img-box-2"
                    style={{
                        backgroundImage: `url(${aboutData.image1})`
                    }} />
            </div>
        </div>
    );
}

export default AppWrap(About, 'About', 'app__about');