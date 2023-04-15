import { useState, useEffect } from 'react';
import ProjectCard from '@/components/Projects/ProjectCard';
import Preloader from '@/components/Preloader';
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

function ProjectsPage () {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 15000);
      });
  }, []);
  console.log(projects);

  if (loading) return <Preloader />;
  if (error) {
    return (
      <>
        {showError && (
          <div className="error-modal">
            There was an issue while loading data. Kindly refresh the page. If issue persists send me a message through the contact page.
          </div>
        )}
        <div>Error loading data</div>
      </>
    );
  }

  return (
    <>
    <Navbar isSticky={true} isTransparent={false}/>
    <span className="big-title">Portfolio</span>
    <div className="projects-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    <Footer />
    <style jsx>{`
      span {
        margin-top: 40px;
        padding-top: 40px;
        text-align: center;
      }

      .big-title {
        display: block;
        font-size: 3rem;
        font-weight: 500;
      }

      .error-modal {
        position: fixed;
        top: 20px;
        right: 20px;
        left: 30px;
        background-color: transparent;
        border-radius: 4px;
        padding: 10px;
        word-wrap: normal;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        background-color: #f8d7da;
        border-color: #f5c6cb;
        color: #721c24;
        font-size: 12px;
        margin-bottom: 5px;
        animation: fadein 0.5s, fadeout 0.5s 14.5s;
      }

      @keyframes fadein {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeout {
        from {
          opacity: 1;
          transform: translateY(0);
        }
        to {
          opacity: 0;
          transform: translateY(-20px);
        }
      }

      @media (max-width: 768px) {
        .big-title {
          font-size: 2rem;
          margin-bottom: 40px;
        }
      }

    `}</style>
    </>
  );
}


export default ProjectsPage;
