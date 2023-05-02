import Link from 'next/link';
import { MetaData } from './Metadata';

const PostPreview = (props: MetaData) => {
  return (
    <>
      <div className="max-w-lg">
        <Link href={`/posts/${props.slug}`}>
          <h2 className="text-red-300 hover:underline my-3">{props.title}</h2>

          <p className="text-slate-400 mb-12">{props.subtitle}</p>
          <p className="text-sm text-slate-400">
            Created by Nicholas Hämmerle
            <br />
            {props.date}
          </p>
          <hr className="my-4" />
        </Link>
      </div>
    </>
  );
};

export default PostPreview;
