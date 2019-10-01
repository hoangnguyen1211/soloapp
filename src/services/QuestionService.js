import data from '../database/db';

export const getAllQuestionByLessonService = async (lessonId) => {
    try {
        return await data.questions.filter(x => x.lessonId === lessonId);
    } catch (error) {
        console.log(error)
    }
    return [];
}