import { createStackNavigator } from 'react-navigation-stack';
import { NotifyScreen } from '../screens/notification';
const NotifyNavigator = createStackNavigator({
    NotifyScreen
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default NotifyNavigator;