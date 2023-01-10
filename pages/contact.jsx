import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              If you want to contact me you can do this with all the options
              mentioned below. Looking forward to get in touch with you.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: nicholashaemmerle@gmx.at</li>
              <li className="contact-item">Phone: +43 660/1586953</li>
              <li className="contact-item">Twitter: @NicholasHaemmer</li>
              <li className="contact-item">Instagram: @nicholashmmerle</li>

            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
