import { createSwitchNavigator } from 'react-navigation';
import {
    QuestionScreen,
    QuizScreen
} from '../screens/question';

const QuestionNavigator = createSwitchNavigator({
    QuestionScreen,
    QuizScreen
});

export default QuestionNavigator;