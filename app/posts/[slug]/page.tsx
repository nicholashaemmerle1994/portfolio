import { getPostContent } from '@/components/getPostMetaData';
import Markdown from 'markdown-to-jsx';

export default function Post(props: any) {
  const post = getPostContent(props.params.slug);
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-3xl font-heading text-red-300">{post.title}</h1>
        <p className="text-slate-400 mt-2 font-text">{post!.date}</p>
      </div>

      <article className="prose prose-neutral dark:prose-invert font-text font-black text-justify">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
