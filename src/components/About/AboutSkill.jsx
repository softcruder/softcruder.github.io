import { FaReact } from 'react-icons/fa'
import { SiJavascript, SiCss3, SiCssmodules, SiRedux } from 'react-icons/si'

const AboutSkill = ({ title }) => {
  return (
  <section className="section-container">
    <span className="title">{title}</span>
    <aside className="content-container">
      <div className="skill-content">
        <SiJavascript className="skill-icon" />
        <span className="skill-name">JavaScript</span>
      </div>
      <div className="skill-content">
        <SiCss3 className="skill-icon" />
        <span className="skill-name">CSS3</span>
      </div>
      <div className="skill-content">
        <SiCssmodules className="skill-icon" />
        <span className="skill-name">CSS Modules</span>
      </div>
      <div className="skill-content">
        <FaReact className="skill-icon" />
        <span className="skill-name">React</span>
      </div>
      <div className="skill-content">
        <SiRedux className="skill-icon" />
        <span className="skill-name">Redux</span>
      </div>
    </aside>
    
    <style jsx>{`
      .section-container {
        padding: 5% 10%;
        background-color: inherit;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .title {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 4vw;
        line-height: 5vw;
        font-weight: 500;
        color: var(--secondary-color);
      }
    
      .content-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        padding-top: 2rem;
      }

      .skill-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.5rem;
        border: 1px solid var(--secondary-color);
      }

      .skill-icon {
        padding-right: 1rem;
      }

      svg[Attributes Style] {
        height: 2em;
        width: 2em;
      }

      .skill-name {
        font-size: 1rem;
        line-height: 1.5rem;
        text-transform: uppercase;
      }

      @media only screen and (max-width: 767px) {
        .title {
          font-size: 3rem;
          line-height: 3.5rem;
          font-weight: bold;
        }
      }

      @media only screen and (max-width: 415px) {
        .skill-container {
          flex-direction: column;
        }

        .skill-content {
          flex-direction: column;
          align-items: flex-start;
        }

        .skill-icon {
          margin-bottom: 0.5rem;
        }
      }
    `}</style>
  </section>
);
    }

export default AboutSkill;
