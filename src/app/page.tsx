import Image from 'next/image';
import Posts from './components/Posts';

export const revalidate = 86400;

export default function Home() {
  return (
    <section className=" mx-auto min-h-[70vh] flex flex-col justify-center items-center">
      <h1 className="md:max-w-lg max-w-sm text-center md:text-2xl text-lg mb-8 text-slate-800 dark:text-amber-300">
        Hello and Welcome, I&apos;m <strong>Mohammed</strong>, I Write Blogs
        About Front End Development.
      </h1>
      <Posts />
    </section>
  );
}
