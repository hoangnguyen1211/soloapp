import data from '../database/db';

export const getAllDiscussService = async () => {
    try {
        return await data.discusses;
    } catch (error) {
        console.log(error)
    }
    return [];
}