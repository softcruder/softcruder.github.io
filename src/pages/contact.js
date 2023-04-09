import Head from "next/head";
import SkeletonScreen from "@/components/SkeletonScreen";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import { meta } from "@/components/content-option";

const ContactPage = () => {
    return (
      <>
      <Head>
        <title> Contact Nasirullah Oladipo  </title>
        <meta name="description" content="Want to send me a message or you are trying scout me? Use the form to contact me." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={meta.favicon} />
      </Head>
      <Header />
      <div className="wrap-form">
      <h1>Contact</h1>
        <Contact />
      </div>
        <style jsx>{`
        .wrap-form{
            top: 60px;
            left: 20px;
            right: 20px;
            display: flex;
            flex-direction: row;
            gap: 2;
            align-items: ;
            justify-content: center;
        }
        h1 {
            margin-left: 2.5rem;
            align-content: flex-start;
        }
        @media {max-width: 767px}`}</style>
      </>
    );
  };
  export default ContactPage;
  