import Head from "next/head";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title> Contact Me | Softcruder </title>
        <meta name="description" content="Want to send me a message or you are trying scout me? Use the form to contact me."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar isSticky={true} isTransparent={false} />
      <section className="wrap-page">
        <div className="contact-block">
          <span className="big-title">Contact</span>
          <div className="form-component"><ContactForm /></div>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        section {
          padding: 11% 10%;
          background-color: var(--black-bg-color);
        }

        .contact-block {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        span {
          margin-top: 40px;
          padding-top: 40px;
          text-align: center;
        }

        .big-title {
          margin-top: 0;
          margin-bottom: 0;
          font-size: 4vw;
          line-height: 5vw;
          font-weight: 500;
          text-shadow: 0 0 16px rgba(16,16,16,.3);
        }

        .form-component {
          margin-top: 50px;
          min-width: 400px;
        }

        @media screen and (max-width: 991px) {
          section {
            background-color: var(--black-bg-color);
          }
          .wrap-page {
            margin-top: 46px;
            padding-top: 40px;
          }
          .contact-block {
            display: block;
          }
          .big-title {
            font-size: 42px;
            line-height: 48px;
            margin-bottom: 30px;
          }
          .form-component {
            min-width: 100%;
          }
        }
        @media screen and (max-width: 767px) {
          .big-title {
            margin-bottom: 30px;
            font-size: 30px;
            line-height: 36px;
          }
        }
        
      `}</style>
    </>
  );
};

export default ContactPage;