import Link from "next/link";
import Image from "next/image";

function SliderItem({ imgSrc, bgColor, title, subtitle, description, demoUrl, repoUrl }) {
  return (
    <div className="slider-item" style={{ backgroundColor: bgColor }}>
      <div className="slider-content">
        <div className="slider-image">
          <Image src={imgSrc} alt={title} />
        </div>
        <div className="slider-text">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{description}</p>
          <div className="slider-buttons">
            <Link href={demoUrl}>
              <a className="btn-primary">Live Demo</a>
            </Link>
            <Link href={repoUrl}>
              <a className="btn-secondary">GitHub Repo</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderItem;