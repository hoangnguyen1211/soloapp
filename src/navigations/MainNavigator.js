import { createSwitchNavigator } from 'react-navigation';
import { SplashScreen, LanguageScreen } from '../screens/startup';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import LearningNavigator from './LearningNavigator';

const MainNavigator = createSwitchNavigator({
    SplashScreen,
    LanguageScreen,
    AuthNavigator,
    AppNavigator,
    LearningNavigator
})

export default MainNavigator;