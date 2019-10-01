import { createSwitchNavigator } from 'react-navigation';
import { 
    SignInScreen, 
    GetCodeScreen, 
    ConfirmScreen,
    SignUpScreen,
    JobScreen,
    ExperienceScreen,
    ForgotPasswordScreen
} from '../screens/authentication';

const AuthNavigator = createSwitchNavigator({
    SignInScreen,
    GetCodeScreen,
    ConfirmScreen,
    SignUpScreen,
    JobScreen,
    ExperienceScreen,
    ForgotPasswordScreen
})

export default AuthNavigator;