import * as types from '../types/QuestionTypes';
import { randomArrayFunc } from '../../util/FunctionUtil';

let questions = [];
let quizzes = [];

const initialState = {
    index: 0,
    questionId: 0,
    title: '',
    type: '',
    theory: '',
    video: '',
    image: '',
    quiz: '',
    answers: [],
    totalQuestion: 0
}

const questionReducer = (state = initialState, action) => {
    let quizItem= {};
    switch (action.type) {
        case types.GET_ALL_QUESTION_BY_LESSON:
            questions = action.payload.data;
            quizzes = questions[0].quizzes;
            quizItem = quizzes[Math.floor(Math.random() * quizzes.length)];
            return {
                ...state,
                index: 0,
                title: action.payload.title,
                questionId: questions[0].id,
                theory: questions[0].content,
                video: questions[0].video,
                image: questions[0].image,
                type: questions[0].type,
                quiz: quizItem.quiz,
                answers: quizItem.answers,
                totalQuestion: questions.length
            }
        case types.GET_QUESTION_BY_INDEX:
            const { index } = action.payload;
            quizzes = questions[index].quizzes;
            quizItem = quizzes[Math.floor(Math.random() * quizzes.length)];
            return {
                ...state,
                index: index,
                questionId: questions[index].id,
                theory: questions[index].content,
                video: questions[index].video,
                image: questions[index].image,
                type: questions[index].type,
                quiz: quizItem.quiz,
                answers: quizItem.answers
            }
        case types.GET_QUIZ_RELATE:
            quizItem = quizzes[Math.floor(Math.random() * quizzes.length)];
            return {
                ...state,
                quiz: quizItem.quiz,
                answers: quizItem.answers
            }
        default:
            return state;
    }
}

export default questionReducer;