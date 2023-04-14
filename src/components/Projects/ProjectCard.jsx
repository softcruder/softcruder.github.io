import Link from 'next/link';
import Image from 'next/image';
import ArrowButton from '@/components/Buttons/ArrowButton';
import Button from '@components/Buttons/Button';

function ProjectCard({ project }) {
  return (
    <section>
    <div className="project-card">
      <Image src={project.image} width={300} height={300} alt={project.name} />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <Button text="details" href={`/projects/${project.id}`} />
      <Button text="github" href={project.githubLink} />
      <ArrowButton text="demo" href={project.demoLink} direction="right" />
    </div>
    <style jsx>{`
    section {
      display: flex;
      flex-direction: row;
      gap: 1;
      flex-wrap: wrap;
      margin: 5% 10% 6% 10%;
    }
    .project-card {
      background-color: var(--primary-color);
      border: 1px solid #464646;
      border-radius: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    img {
      border-radius: 2px;
      margin: 3px;
    }

    h2 {
      font-weight: 400;
      padding: 5px;
      text-transform: capitalize;
      font-size: 1rem;
    }

    a.alt-link {
      text-transform: lowercase;
      text-decoration: underline;
      color: #dbdbdb;
      font-weight: bold;
      font-family: 'Questrial', sans-serif;
    }

    .card-heading {
      width: 100%;
      text-align: center;
    }

    .card-content {
      padding: 4rem;
      text-align: left;
      border-top: 1px solid #464646;
    }
    `}</style>
    </section>
  );
}

export default ProjectCard;