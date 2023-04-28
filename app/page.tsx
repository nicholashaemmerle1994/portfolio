/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import {
  FaEnvelopeSquare,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTwitterSquare,
} from 'react-icons/fa';

export default function LandingPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      <h1 className="font-black font-nav text-3xl my-4">Nicholas Hämmerle</h1>
      {/* <hr className="my-4" /> */}
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
            <ul className="font-text">
              <li>Vienna</li>
              <li>
                <Link href="https://www.linkedin.com/in/nicholashaemmerle/" target="_blank">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://github.com/nicholashaemmerle1994" target="_blank">
                  Github
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/NicholasHaemmer" target="_blank">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="mailto:nicholashaemmerle@gmx.at">Mail</Link>
              </li>
              <li>
                <Link href="/lebenslauf.pdf" download="CV Nicholas Hämmerle.pdf" target="_blank">
                  Download my CV
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="font-black font-nav text-3xl my-20">Latest Projects</h2>
      <hr className="my-4" />
    </div>
  );
}
