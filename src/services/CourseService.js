import data from '../database/db';

export const getAllCourseByTopicService = async (topicId) => {
    try {
        return await data.courses.filter(x => x.topicId === topicId);
    } catch (error) {
        console.log(error)
    }
    return [];
}