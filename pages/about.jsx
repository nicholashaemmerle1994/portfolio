import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              I was born in Carinthia in 1994 and spend the majority of my whole
              life in my Hometown. When i turned 18 i started to work in
              hospitality as a bartender in many different hotels and bars
              around Austria. All my life i had big interest in everything
              related to tech and media, but i never quite figured out in which
              direction i want to move. This past year 2022, i discovered my
              interest for web development and spend all year with doing courses
              on udemy and trying to code for myself. In the summer of 2022 i
              got a recommendation for the UpLeveled Fullstack Web Development
              Bootcamp in Vienna. Aaaand here i am.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
