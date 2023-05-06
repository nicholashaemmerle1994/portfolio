import { getPostContent } from '@/components/getPostMetaData';
import Markdown from 'markdown-to-jsx';

export default function Post(props: any) {
  const post = getPostContent(props.params.slug);
  console.log(post);
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.title}</h1>
        <p className="text-slate-400 mt-2">{post!.date}</p>
      </div>

      <article className="prose prose-neutral dark:prose-invert">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
