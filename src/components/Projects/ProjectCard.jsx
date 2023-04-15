
import Image from 'next/image';
import ArrowButton from '@/components/Buttons/ArrowButton';
import Button from '@components/Buttons/Button';
import { FaGithub, FaInfo } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <section>
    <div className="project-card">
      <div className="first-part">
        <Image src={project.image} width={250} height={250} alt={project.name} />
        <span className='project-title aside'>{project.name}</span>
      </div>
      <div className="card-heading">
        <p> {FaInfo} {project.description}</p>
      </div>
      <div className="card-content">
        {/* <Button text="details" href={`/projects/${project.id}`} /> */}
        <Button text="github" href={project.githubLink} />
        <ArrowButton text="demo" href={project.demoLink} direction="right" />
      </div>
    </div>
    <style jsx>{`
    section {
      margin: 5% 10% 5% 10%;
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

    span {
      font-weight: 500;
      padding: 5px;
      text-transform: capitalize;
      font-size: 2rem;
    }

    .first-part {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      justify-content: center;
      gap: 3rem;
    }

    .project-title {
      text-align: center;
      text-wrap: wrap;
    }

    .card-heading {
      width: 100%;
      border-top: 1px solid #464646;
      border-bottom: 1px solid #464646;
      text-align: left;
      padding: 1.5rem;
    }

    .card-content {
      width: 100%;
      padding: 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #464646;
    }
    @media (max-width: 991px) {
      .first-part {
        flex-direction: column;
        gap: 1rem;
      }

      img {
        width: 200px !important;
        aspect-ratio: 200 / 200 !important;
      }
  
      .project-title {
        padding: 1rem;
      }

      span {
        font-size: 1.2rem;
        line-height: 1.5rem;
      }

      p {
        font-size: .8rem;
      }
  
      .card-heading {
        width: 100%;
        border-top: 1px solid #464646;
        border-bottom: 1px solid #464646;
        text-align: left;
        padding: 1rem;
      }

      .card-content {
        padding: 1.5rem;
        border: none;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
    `}</style>
    </section>
  );
}

export default ProjectCard;