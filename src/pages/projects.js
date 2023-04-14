import { useState, useEffect } from 'react';
import ProjectCard from '@/components/Projects/ProjectCard';
import Preloader from '@/components/Preloader';

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
            There was an issue while loading data. Kindly refresh the page. If issue persists send me a message through the contact me page
          </div>
        )}
        <div>Error loading data</div>
      </>
    );
  }

  return (
    <>
    <span className="big-title">Portfolio</span>
    <div className="projects-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    <style jsx>{`
    span.big-title {
      display: block;
      font-size: 3rem;
      font-weight: 500;
  }
    `}</style>
    </>
  );
}


export default ProjectsPage;
