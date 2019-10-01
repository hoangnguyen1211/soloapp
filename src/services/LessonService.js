import data from '../database/db';

export const getAllLessonByCourseService = async (courseId) => {
    try {
        return await data.lessons.filter(x => x.courseId === courseId);
    } catch (error) {
        console.log(error)
    }
    return [];
}