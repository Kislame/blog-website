import { getPostsMeta, getPostByName } from '../../../../lib/posts';
import getFormattedDate from '../../../../lib/getFormatedDate';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import 'highlight.js/styles/github-dark.css';
export const revalidate = 86400;
type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();
  if (!posts) return [];
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped

  if (!post) {
    return { title: 'post not found' };
  }
  return {
    title: post.meta.title,
    description: `this is the page of ${post.meta.title}`,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped

  if (!post) {
    return notFound();
  }
  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <section className="px-6 prose md:prose-xl prose-lg prose-slate dark:prose-invert mx-auto mt-8">
      <p className="mt-0">{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related: </h3>
        <div className="flex gap-4">{tags}</div>
      </section>
      <p>
        <Link href="/">← Back to home</Link>
      </p>
    </section>
  );
}
