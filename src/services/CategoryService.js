import data from '../database/db';

export const getAllTopicService = async () => {
    try {
        return await data.topics;
    } catch (error) {
        console.log(error)
    }
    return [];
}


export const getAllCategoryService = async () => {
    try {
        return await data.categories.filter(item => item.courses.length != 0);
    } catch (error) {
        console.log(error)
    }
    return [];
}