import fs from 'fs';
import matter from 'gray-matter';
import { MetaData } from '../components/Metadata';

export default function getPostMetadata(): MetaData[] {
  const folder = 'blogposts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
}

export function getPostContent(slug: string) {
  const fullPath = `./blogposts/${slug}.md`;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    subtitle: matterResult.data.subtitle,
    slug: slug,
    content: matterResult.content,
  };
}

// export function getPostContent(slug: string) {
//   const folder = 'blogposts/';
//   const files = fs.readdirSync(folder);
//   const markdownPosts = files.filter((file) => file.endsWith('.md'));

//   // Get gray-matter data from single file where slug matches.

//   const post = markdownPosts.map((fileName) => {
//     const fileContents = fs.readFileSync(`${folder}/${fileName}`, 'utf8');
//     const matterResult = matter(fileContents);
//     const moddedName = fileName.replace('.md', '');
//     if (moddedName === slug) {
//       return {
//         title: matterResult.data.title,
//         date: matterResult.data.date,
//         subtitle: matterResult.data.subtitle,
//         slug: fileName.replace('.md', ''),

//       };
//     }
//   });
//   return post[0];
// }
