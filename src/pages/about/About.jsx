import React from 'react'
import "./style.scss";
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
const About = () => {
  return (
    <div className="about-page">
            <ContentWrapper>
                <h2>About Us</h2>
                <p>
                    Welcome to CineInsight!
                </p>
                <p>
                "Thank you for visiting CineInsight! We take pride in offering a cinematic experience like no other. CineInsight is your go-to destination for detailed movie information, personalized recommendations, and an immersive exploration of the world of film. We sincerely appreciate your trust in CineInsight. Please note that the data presented on our platform is sourced from TMDb (The Movie Database). Your satisfaction is our priority, and we look forward to enhancing your movie journey. For any inquiries or support, feel free to reach out. Thank you for being a part of the CineInsight community!"
                </p>
                <p>
                    Our mission is to provide you with the best cinematic experience,
                    offering accurate and reliable information sourced directly from TMDb (The Movie Database).
                    If you have any questions or need assistance, feel free to reach out to us.
                </p>
            </ContentWrapper>
        </div>
  )
}

export default About
