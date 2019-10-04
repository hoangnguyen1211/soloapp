import { StyleSheet } from 'react-native';
import React from 'react';
import { COLOR_ORANGE } from '../constants/ColorConstants';
import { TextForm } from '../components/form';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    MY_COURSE_SCREEN,
    HOME_NAVIGATOR,
    DISCUSS_NAVIGATOR,
    SETTING_NAVIGATOR,
    NOTIFY_NAVIGATOR
} from '../constants/NavigatorConstants';
import DiscussNavigator from './DiscussNavigator';
import HomeNavigator from './HomeNavigator';
import SettingNavigator from './SettingNavigator';
import NotifyNavigator from './NotifyNavigator';
import { MyCourseScreen } from '../screens/learning';

const AppNavigator = createBottomTabNavigator({
    MyCourseScreen,
    DiscussNavigator,
    HomeNavigator,
    NotifyNavigator,
    SettingNavigator
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            return ({
                // Gọi hàm để lấy tên tabbar
                tabBarLabel: ({ focused, horizontal, tintColor }) => {
                    switch (routeName) {
                        case MY_COURSE_SCREEN:
                            return <TextForm style={[styles.tabLabel, { color: tintColor }]}>
                                Học tập
                            </TextForm>
                        case DISCUSS_NAVIGATOR:
                            return <TextForm style={[styles.tabLabel, { color: tintColor }]}>
                                Thảo luận
                            </TextForm>
                        case HOME_NAVIGATOR:
                            return <TextForm style={[styles.tabLabel, { color: tintColor }]}>
                                Trang chủ
                                </TextForm>
                        case NOTIFY_NAVIGATOR:
                            return <TextForm style={[styles.tabLabel, { color: tintColor }]}>
                                Thông báo
                                </TextForm>
                        case SETTING_NAVIGATOR:
                            return <TextForm style={[styles.tabLabel, { color: tintColor }]}>
                                Cài đặt
                                </TextForm>
                        default:
                            break;
                    }
                },
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    switch (routeName) {
                        case MY_COURSE_SCREEN:
                            return <Ionicons name='ios-school' size={22} color={tintColor} />
                        case DISCUSS_NAVIGATOR:
                            return <Ionicons name='ios-chatboxes' size={25} color={tintColor} />
                        case HOME_NAVIGATOR:
                            return <Ionicons name='ios-home' size={22} color={tintColor} />
                        case NOTIFY_NAVIGATOR:
                            return <Ionicons name='ios-notifications' size={25} color={tintColor} />
                        case SETTING_NAVIGATOR:
                            return <Ionicons name='ios-construct' size={22} color={tintColor} />
                        default:
                            break;
                    }
                }
            })
        },
        tabBarOptions: {
            activeTintColor: COLOR_ORANGE,
            inactiveTintColor: 'gray'
        }
    });


const styles = StyleSheet.create({
    tabLabel: {
        fontSize: 12,
        fontWeight: '600'
    }
})

export default createAppContainer(AppNavigator);