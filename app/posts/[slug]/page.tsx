import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
  const fullPath = `posts/${slug}.md`;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  return matterResult;
};

export default function Post(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose prose-neutral dark:prose-invert">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
