import React, { useEffect, useState } from 'react';
import './Projects.css';
//import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs } from 'react-icons/fa';
//import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo, SiSwift } from 'react-icons/si';
import { Project } from '../types';
import { getProjects } from '../queries/getProjects';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

import { 
  FaReact, FaNodeJs, FaAws, FaDocker, FaAngular, FaGithub, FaGitlab,
  FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs
} from 'react-icons/fa';

import { 
  SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, 
  SiCss3, SiJquery, SiFirebase, SiTerraform, SiArgo, SiBootstrap, SiTailwindcss ,SiRedis, SiApachehadoop, SiApachespark, SiRabbitmq
} from 'react-icons/si';



const techIcons: { [key: string]: JSX.Element } = {
  // --- Frontend ---
  "ReactJS": <FaReact />,
  "React": <FaReact />,
  "Next.js": <FaReact />,
  "Angular": <FaAngular />,
  "Vue.js": <FaVuejs />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "CSS": <SiCss3 />,
  "Tailwind CSS": <SiTailwindcss />,
  "Bootstrap": <SiBootstrap />,
  "Material UI": <SiMaterialdesign />,
  "jQuery": <SiJquery />,
  "JQuery": <SiJquery />,
  "Slate.js": <FaReact />,   // no direct icon, using React

  // --- Backend ---
  "NodeJS": <FaNodeJs />,
  "Node.js": <FaNodeJs />,
  "Express.js": <FaNodeJs />,
  "Ruby On Rails": <SiRubyonrails />,
  "Java": <FaJava />,
  "Spring Boot": <FaJava />,
  "Hibernate": <FaJava />,
  "Maven": <FaJava />,
  "Gradle": <FaJava />,
  "JUnit": <FaJava />,
  "Mockito": <FaJava />,
  "Python": <FaPython />,
  "Flask": <FaPython />,
  "FastAPI": <FaPython />,  // no icon, fallback to Python
  "NLP": <FaPython />,      // generic ML/NLP fallback

  // --- Cloud & Infra ---
  "AWS": <FaAws />,
  "ECS": <FaAws />,
  "AWS-ECS": <FaAws />,
  "Lambda": <FaAws />,
  "Cognito": <FaAws />,
  "Firebase": <SiFirebase />,
  "GCP": <FaGoogle />,
  "Azure": <FaMicrosoft />,
  "Heroku": <GrDeploy />,
  "Netlify": <GrDeploy />,

  // --- Databases ---
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Redis": <SiRedis />,

  // --- DevOps / CI/CD ---
  "Docker": <FaDocker />,
  "Kubernetes": <GrKubernetes />,
  "Terraform": <SiTerraform />,
  "ArgoCD": <SiArgo />,
  "Jenkins": <FaJenkins />,
  "GitHub": <FaGithub />,
  "GitLab": <FaGitlab />,
  "CI/CD": <FaGitlab />,
  "WebSocket": <FaNodeJs />,

  // --- Big Data ---
  "Hadoop": <SiApachehadoop />,
  "Apache Spark": <SiApachespark />,
  "RabbitMQ": <SiRabbitmq />,

  // --- AI / ML / Agents ---
  "Machine Learning": <FaPython />,
  "ARIMA": <FaPython />,
  "Forecasting": <FaPython />,
  "Agentic AI": <FaReact />,   // placeholder
  "RAG": <FaReact />,          // placeholder
  "OpenAI GPT-4o": <FaReact />, // placeholder
  "Whisper": <FaReact />,       // placeholder
  "Coqui TTS": <FaReact />,     // placeholder
  "Tavily API": <FaReact />,    // placeholder
};



const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  
  useEffect(() => { 
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    
    fetchProjects()
  }, [])
  
  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.technologies.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
