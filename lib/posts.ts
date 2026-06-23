import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content: string;
  contentHtml?: string;
}

export async function getSortedPostsData(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title || "Sin título",
      description: matterResult.data.description || "",
      date: matterResult.data.date || new Date().toISOString().split("T")[0],
      category: matterResult.data.category || "general",
      content: matterResult.content,
    };
  });

  return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: matterResult.data.title || "Sin título",
    description: matterResult.data.description || "",
    date: matterResult.data.date || new Date().toISOString().split("T")[0],
    category: matterResult.data.category || "general",
    content: matterResult.content,
    contentHtml,
  };
}

export function getAllSlugs(): { slug: string }[] {
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
}
