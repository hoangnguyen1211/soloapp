import { createStackNavigator } from 'react-navigation-stack';
import { 
    HomeScreen,
    CourseScreen,
    LessonScreen
} from '../screens/home';
import QuestionNavigator from './QuestionNavigator';
import EnglishNavigator from './EnglishNavigation';
const HomeNavigator = createStackNavigator({
    HomeScreen,
    CourseScreen,
    LessonScreen,
    QuestionNavigator,
    EnglishNavigator
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

HomeNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = false;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if ( routeName == 'HomeScreen') {
        tabBarVisible = true
    }
    return {
        tabBarVisible,
    }
}

export default HomeNavigator;