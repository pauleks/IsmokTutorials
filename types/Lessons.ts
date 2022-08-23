interface LessonAuthor {
  name: string;
  github?: string;
}

export interface LessonInterface {
  id: string;
  name: string;
  description: string;
  author: LessonAuthor[];
  rowNumber: number;
  content: string;
  draft?: boolean;
}

export interface CategoryInterface {
  id: string;
  name: string;
  description: string;
  lessons: LessonInterface[];
  hidden?: boolean;
}

export interface pathsInterface {
  params: { category: string; lesson: string };
}

export interface staticPathsInterface {
  paths: pathsInterface[];
  fallback: boolean;
}
