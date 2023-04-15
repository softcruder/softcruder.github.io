import Head from "next/head";
import Navbar from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title> Contact Me </title>
        <meta
          name="description"
          content="Want to send me a message or you are trying scout me? Use the form to contact me."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isSticky={true} isTransparent={false} />
      <section className="wrap-page">
        <div className="contact-block">
          <span className="big-title">Contact</span>
          <div className="form-component"><Contact /></div>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        section {
          position: relative;
          padding: 11% 10%;
        }

        .contact-block {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        span {
          display: flex;
          align-items: flex-start;
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
          margin-top: 20px;
          min-width: 400px;
        }

        @media screen and (max-width: 991px) {
          .wrap-page {
            margin-top: 46px;
            padding-top: 40px;
          }
          .contact-block {
            display: block;
          }
          .big-title {
            font-size: 36px;
            line-height: 42px;
          }
          .form-component {
            margin-top: 10px;
            min-width: 100%;
          }
        }
        @media screen and (max-width: 767px) {
          .big-title {
            margin-bottom: 10px;
            font-size: 24px;
            line-height: 30px;
          }
        }
        
      `}</style>
    </>
  );
};

export default ContactPage;