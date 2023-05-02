import getPostMetadata from '@/components/getPostMetaData';
import PostPreview from '@/components/PostPreviiew';

export default function BlogPage() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => <PostPreview key={post.slug} {...post} />);

  return (
    <div className="flex flex-col prose dark:prose-invert">
      <h1 className="font-black font-nav text-3xl mt-10 mb-0 text-red-300">What I Learned Today</h1>
      <h3 className="font-text mt-0">#100DaysOfCoding</h3>
      <hr className="mt-10 mb-4" />
      <div className="flex">{postPreviews}</div>
    </div>
  );
}
