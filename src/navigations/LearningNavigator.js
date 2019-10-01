import { createStackNavigator } from 'react-navigation-stack';
import {
    MyCourseScreen
} from '../screens/learning';
const LearningNavigator = createStackNavigator({
    MyCourseScreen
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});
export default LearningNavigator;