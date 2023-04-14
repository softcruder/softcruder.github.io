import Link from 'next/link';
import Image from 'next/image';
import ArrowButton from '@/components/Buttons/ArrowButton';
import Button from '@components/Buttons/Button';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <Image src={project.image} width={300} height={300} alt={project.name} />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <Button text="details" href={`/projects/${project.id}`} />
      <ArrowButton text="demo" href={project.demoLink} direction="right" />
    </div>
  );
}

export default ProjectCard;