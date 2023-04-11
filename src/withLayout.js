import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const withLayout = (Component) => {
  return function WithLayout(props) {
    return (
      <div className="container">
        <Header />
        <main>
          <Component {...props} />
        </main>
        <Footer />
      </div>
    );
  };
};

export default withLayout;