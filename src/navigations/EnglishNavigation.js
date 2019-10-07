import { createStackNavigator } from 'react-navigation-stack';
import {
    EnglishScreen
} from '../screens/english';
const EnglishNavigator = createStackNavigator({
    EnglishScreen
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});
export default EnglishNavigator;