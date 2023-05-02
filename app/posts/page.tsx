import getPostMetadata from '@/components/getPostMetaData';
import PostPreview from '@/components/PostPreviiew';

export default function BlogPage() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => <PostPreview key={post.slug} {...post} />);

  return <div className="flex">{postPreviews}</div>;
}
