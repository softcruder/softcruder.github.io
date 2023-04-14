import React from 'react';
import '@/styles/Layout.module.css';

const Layout = ({ title, component }) => {
  return (
    <section className="layout padded">
      <div className="section-block">
        <div className="title"><span className="big-title">{title}</span></div>
        <div className="component">{component}</div>
      </div>
      <style jsx>{`
      .layout {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }

      .section-block {
        display: flex;
      }
      
      .title {
        flex: 1;
        text-align: left;
        margin-right: 20px;
      }

      .big-title {
        font-size: 6vw;
        line-height: 46px;
      }
      
      .component {
        align-content: flex-end;
        width: 100%;
      }
    
      .padded {
        padding: 11% 10%;
      }
      @media screen and (max-width: 991px)
      .section-block {
        margin-top: 20px;
      }
      `}</style>
    </section>
  );
};

export default Layout;
