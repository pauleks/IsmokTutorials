import fs from 'fs/promises';
import JSONLessonsData from './lessonData.json';

const getLessons = async () => {
    const lessons = await fs.readdir('./pages/pamokos');

    const lessonData = lessons.map((lesson) => {
        const id = lesson.replace('.mdx', '');
        const hasData = JSONLessonsData[id] !== undefined;

        return {
            id,
            data: hasData ? JSONLessonsData[id] : null
        };
    });

    return lessonData;
}

const getLessonData = async (id) => {

}

export { getLessons };