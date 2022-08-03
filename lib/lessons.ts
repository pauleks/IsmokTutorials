import fs from "fs";
import path from "path";
import matter from "gray-matter";
import lessonsConfig from "./lessonsConfig";
import { LessonInterface, CategoryInterface } from "./types";
import { remark } from "remark";
import html from "remark-html";
import rehypeHighlight from "rehype-highlight";

const lessonsDirectory = path.join(process.cwd(), "lessons");

function getLessons(category: string) {
  const directory = path.join(lessonsDirectory, category);
  const files = fs.readdirSync(directory);
  const lessons = files.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const processedContent = remark()
      .use(rehypeHighlight)
      .use(html)
      .processSync(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
      id,
      contentHtml,
      ...matterResult.data,
    } as LessonInterface;
  });
  return lessons;
}

export function getCategoriesOverview() {
  const categories: string[] = fs.readdirSync(lessonsDirectory);
  return categories
    .map((category) => {
      return {
        ...lessonsConfig[category],
        category,
        lessons: getLessons(category).sort((a, b) => a.rowNumber - b.rowNumber),
      } as CategoryInterface;
    })
    .sort((a, b) => a.rowNumber - b.rowNumber);
}
