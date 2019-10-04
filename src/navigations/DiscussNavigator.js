import { createStackNavigator } from 'react-navigation-stack';
import { 
    DiscussScreen, 
    DiscussDetailsScreen , 
    DiscussQuestionScreen,
} from '../screens/discuss';
const DiscussNavigator = createStackNavigator({
    DiscussScreen,
    DiscussDetailsScreen,
    DiscussQuestionScreen
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

DiscussNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = false;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if ( routeName == 'DiscussScreen') {
        tabBarVisible = true
    }
    return {
        tabBarVisible,
    }
}

export default DiscussNavigator;