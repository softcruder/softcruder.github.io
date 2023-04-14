import React from 'react';

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
        flex-direction: row;
      }
      
      .title {
        flex: 1;
        text-align: left;
        margin-right: 20px;
      }

      .big-title {
        font-size: 3rem;
        line-height: 46px;
      }
      
      .component {
      display: flex;
        align-content: flex-end;
      }
    
      .padded {
        padding: 11% 10%;
      }
      @media screen and (max-width: 991px)
      .section-block {
        margin-top: 20px;
       
        flex-directiom: column;
      }
      `}</style>
    </section>
  );
};

export default Layout;
