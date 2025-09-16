import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaPassport, FaCode, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope, FaBook } from 'react-icons/fa';
import workPermitImg from '../images/work_permit.png'; // Correct relative path
import luffy from '../images/luffy.jpeg';
import barney from '../images/barney.jpg';
import bean from '../images/bean.jpg';
import heist from '../images/heist.jpg';
import contact from '../images/contact.png';
import read from '../images/snoop.jpg';
type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Work Permit", imgSrc: workPermitImg, icon: <FaPassport />, route: "/work-permit" },
    { title: "Skills", imgSrc: luffy, icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: barney, icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: bean, icon: <FaCertificate />, route: "/certifications" },
    //{ title: "Recommendations", imgSrc: "https://picsum.photos/seed/recommendations/250/200", icon: <FaHandsHelping />, route: "/recommendations" },
    { title: "Projects", imgSrc: heist, icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", imgSrc: contact, icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: luffy, route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: heist, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: bean, route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: barney, route: "/work-experience", icon: <FaBriefcase /> },
    //{ title: "Recommendations", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: contact, route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    //{ title: "Recommendations", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: contact, route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: heist, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: barney, route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: bean, route: "/certifications", icon: <FaCertificate /> },
  ],
  adventure: [
    //{ title: "Music", imgSrc: "https://picsum.photos/seed/music/250/200", route: "/music", icon: <FaMusic /> },
    { title: "Projects", imgSrc: heist, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Reading", imgSrc: read, route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: contact, route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Certifications", imgSrc: bean, route: "/certifications", icon: <FaCertificate /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;