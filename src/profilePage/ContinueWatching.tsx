import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import workPermitImg from '/Users/patelkinsu/Desktop/netflix_portfolio/src/images/work_permit.png';
import luffy from '/Users/patelkinsu/Desktop/netflix_portfolio/src/images/luffy.jpeg';
import barney from '/Users/patelkinsu/Desktop/netflix_portfolio/src/images/barney.jpg';
import bean from '/Users/patelkinsu/Desktop/netflix_portfolio/src/images/bean.jpg';
import heist from '/Users/patelkinsu/Desktop/netflix_portfolio/src/images/heist.jpg';
import contact from '/Users/patelkinsu/Desktop/netflix_portfolio/src/images/contact.png';
import read from '/Users/patelkinsu/Desktop/netflix_portfolio/src/images/snoop.jpg';
type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    //{ title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    { title: "Reading", imgSrc: read, link: "/reading" },
    // { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/blogs" },
    { title: "Contact Me", imgSrc: contact, link: "/contact-me" }
  ],
  developer: [
    //{ title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    { title: "Reading", imgSrc: read, link: "/reading" },
    // { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/blogs" },
    { title: "Certifications", imgSrc: bean, link: "/certifications" },
    { title: "Contact Me", imgSrc: contact, link: "/contact-me" }
  ],
  stalker: [
    { title: "Reading", imgSrc: read, link: "/reading" },
    // { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/blogs" },
    { title: "Contact Me", imgSrc: contact, link: "/contact-me" }
  ],
  adventure: [
    //{ title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    { title: "Reading", imgSrc: read, link: "/reading" },
    { title: "Certifications", imgSrc: bean, link: "/certifications" },
    { title: "Contact Me", imgSrc: contact, link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
