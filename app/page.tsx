/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelopeSquare, FaFileDownload, FaGithub, FaLinkedin, FaMapMarkerAlt, FaTwitterSquare } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      <h1 className="font-black font-nav text-3xl my-4 text-red-300">Nicholas Hämmerle</h1>
      <div>
        <p className="font-text">Hey, I'm Nico. I'm a passionate Fullstack Developer, finding satisfaction in implementing new features and debugging. Constantly seeking new challenges and learning new things.</p>
        <div className="my-10 flex">
          <figure className="flex flex-col justify-center align-center mr-4">
            <Image src="/me.jpg" alt="me" height={100} width={100} className="rounded-full grayscale flex" />
          </figure>
          <div className="flex flex-col justify-around mr-2">
            <FaMapMarkerAlt />
            <FaLinkedin />
            <FaGithub />
            <FaTwitterSquare />
            <FaEnvelopeSquare />
            <FaFileDownload />
          </div>
          <div className="flex flex-col">
            <div className="font-text list-none">
              <li>Vienna</li>
              <li>
                <Link href="https://www.linkedin.com/in/nicholashaemmerle/" target="_blank" className="no-underline hover:text-red-600">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://github.com/nicholashaemmerle1994" target="_blank" className="no-underline hover:text-red-600 ">
                  Github
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/NicholasHaemmer" target="_blank" className="no-underline hover:text-red-600">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="mailto:nicholashaemmerle@gmx.at" className="no-underline hover:text-red-600">
                  Mail
                </Link>
              </li>
              <li>
                <Link href="/lebenslauf.pdf" download="CV Nicholas Hämmerle.pdf" target="_blank" className="no-underline hover:text-red-600">
                  Download my CV
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <h2 className="font-black font-nav text-3xl mt-10 mb-4 text-red-300">Latest Project</h2>
      <h3 className="font-text text-lg mb-4">Coffix-Social</h3>
      <p className="font-text">A social media PWA for coffee lovers.</p>
      <p className="font-text">Built with React, Next.js, TypeScript, TailwindCSS, Node.js.</p>
      <p className="font-text">The idea was, that coffee lovers from all over the world can share recipes and their experience with different equipment, roasters and beans. </p>
      <p className="font-text">
        You can check it out{' '}
        <Link href="https://coffix-social.fly.dev" className="underline hover:text-red-600">
          here
        </Link>
      </p>
      <div className="flex flex-wrap gap-2 justify-center mt-8">
        <Image src="/login1.png" height={300} width={300} alt="login" className="h-auto w-5/12" />
        <Image src="/form1.png" height={300} width={300} alt="form" className="h-auto w-5/12" />
        <Image src="/recipe1.png" height={300} width={300} alt="recipe" className="h-auto w-5/12" />
        <Image src="/profile1.png" height={300} width={300} alt="profile" className="h-auto w-5/12" />
      </div>
    </div>
  );
}
