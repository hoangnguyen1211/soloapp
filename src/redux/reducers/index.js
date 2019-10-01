import { combineReducers } from "redux";
import signUpReducer from './SignUpReducer';
import questionReducer from './QuestionReducer';
import courseReducer from './CourseReducer';
import lessonReducer from './LessonReducer';
import discussReducer from './DiscussReducer';

const appReducers = combineReducers({
    signUpReducer,
    questionReducer,
    courseReducer,
    lessonReducer,
    discussReducer
});

export default appReducers;