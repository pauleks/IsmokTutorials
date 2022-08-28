interface LessonAuthor {
  name: string;
  github?: string;
}

export interface LessonInterface {
  name: string;
  link: string;
}

export interface CategoryInterface {
  id: string;
  name: string;
  description: string;
  lessons: LessonInterface[];
  hidden?: boolean;
}

export interface pathsInterface {
  params: { category: string; };
}

export interface staticPathsInterface {
  paths: pathsInterface[];
  fallback: boolean;
}
