import { FaReact } from 'react-icons/fa'
import { SiJavascript, SiCss3, SiCssmodules, SiRedux } from 'react-icons/si'

const AboutSkill = ({ title }) => {
  return (
  <section className="skill-container">
    <span className="title">{title}</span>
    <aside className="content-container">
      <div className="skill-content">
        <SiJavascript className="skill-icon" />
        <p>JavaScript</p>
      </div>
      <div className="skill-content">
        <SiCss3 className="skill-icon" />
        <p>CSS3</p>
      </div>
      <div className="skill-content">
        <SiCssmodules className="skill-icon" />
        <p>CSS Modules</p>
      </div>
      <div className="skill-content">
        <FaReact className="skill-icon" />
        <p>React</p>
      </div>
      <div className="skill-content">
        <SiRedux className="skill-icon" />
        <p>Redux</p>
      </div>
    </aside>
    
    <style jsx>{`
    .section-container {
      padding: 5% 10%;
      background-color: inherit;
    }

    .title {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 4vw;
      line-height: 5vw;
      font-weight: 500;
      color: var(--secondary-color);
  }
  .skill-container {
    display: flex;
    flex-direction: row;
    width:50%;
    align-items: flex-start;
  }
  
  .title {
    font-size: 4vw;
    line-height: 5vw;
    font-weight: bold;
  }
  
  .content-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

      .skill-content {
        display: flex;
        flex-direction: row;
      }

      .skill-icon {
        margin-right: 1rem;
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
