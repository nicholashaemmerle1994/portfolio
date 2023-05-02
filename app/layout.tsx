import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Nicholas H.',
  description: 'My Personal Website and Blog',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        {/* <Image src="/logo.png" alt="logo" height={80} width={80} /> */}
        <div className="flex flex-col sm:flex-row mx-8 align-center justify-center">
          <aside className="font-nav">
            <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
              <Link href="/">
                <Image src="/logo.png" alt="logo" height={25} width={40} />
              </Link>
            </div>
            <nav className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative ">
              <ul className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
                <li className="transition-all text-gray-500 hover:text-red-600 flex align-middle font-bold">
                  <a href="/" className="relative py-[5px] px-[10px] text-2xl">
                    Home
                  </a>
                  {/* Landing Page and Latest Project Section, Contact, and cv download */}
                </li>
                <li className="transition-all text-gray-500 hover:text-red-600  flex align-middle font-bold">
                  <a href="/about" className="relative py-[5px] px-[10px] text-2xl">
                    About
                  </a>
                </li>
                <li className="transition-all text-gray-500 hover:text-red-600 flex align-middle font-bold">
                  <a href="/posts" className="relative py-[5px] px-[10px] text-2xl">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
          {children}
        </div>
      </body>
    </html>
  );
}
