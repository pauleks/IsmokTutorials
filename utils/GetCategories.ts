import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { LessonInterface, CategoryInterface } from "../types/Lessons";

import CategoryData from "../data/Categories.json";

const contentDirectory = path.join(process.cwd(), "lessons");

const getLessons = (category: string) => {
  const categoryPath = path.join(contentDirectory, category);
  const files = fs.readdirSync(categoryPath);
  const lessons = files
    .map((fileName) => {
      const filePath = path.join(categoryPath, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        ...data,
        content,
        id: fileName.replace(".md", ""),
      } as LessonInterface;
    })
    .sort((a, b) => a.rowNumber - b.rowNumber);
  return lessons;
};

export const getCategories = () => {
  const categories: CategoryInterface[] = CategoryData.map((category) => {
    return {
      ...category,
      lessons: getLessons(category.id),
    } as CategoryInterface;
  });
  return categories;
};
