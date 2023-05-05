import Link from 'next/link';
import { MetaData } from './Metadata';

export default function PostPreview(props: MetaData) {
  return (
    <>
      <div className="max-w-lg">
        <Link href={`/posts/${props.slug}`} className="no-underline">
          <h2 className="font-text text-lg hover:underline my-3">{props.title}</h2>

          <p className="font-text text-slate-400 mb-12">{props.subtitle}</p>
          <p className="font-text text-sm text-slate-400">
            Created by Nicholas Hämmerle
            <br />
            {props.date}
          </p>
          <hr className="my-4" />
        </Link>
      </div>
    </>
  );
}
