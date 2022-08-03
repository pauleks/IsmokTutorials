export interface LessonInterface {
  id: string;
  contentHtml: string;
  title: string;
  rowNumber: number;
  author: string;
  draft: boolean;
  categoryFinish?: boolean;
}

export interface CategoryInterface {
  category: string;
  lessons: LessonInterface[];
  name: string;
  description: string;
  rowNumber: number;
}

export interface pathsInterface {
  params: { category: string; lesson: string };
}

export interface staticPathsInterface {
  paths: pathsInterface[];
  fallback: boolean;
}
