import { getPostsMeta } from '../../../lib/posts';
import ListItem from './ListItem';

export default async function Posts() {
  const posts = await getPostsMeta();
  if (!posts) {
    return <p>Sorry, no posts are available</p>;
  }

  return (
    <section className="prose prose-slate prose-lg md:prose-xl dark:prose-invert">
      <p className="text-center text-xl">latest blogs</p>
      <ul className="">
        {posts.map((post) => (
          <ListItem post={post} key={post.id} />
        ))}
      </ul>
    </section>
  );
}
