import Head from "next/head";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import { meta } from "@/components/content-option";
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
        <link rel="icon" href={meta.favicon} />
      </Head>
      <Header />
      <section className="wrap-form">
        <div className="contact-block">
          <h1 className="project-title">Contact</h1>
          <Contact />
        </div>
      </section>
      <Footer />
      <style jsx>{`
        .wrap-form {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-block {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 100vh;
        }
        
        .project-title {
          align-self: flex-end;
        }
        
      `}</style>
    </>
  );
};

export default ContactPage;