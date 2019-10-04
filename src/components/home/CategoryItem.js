import React, { PureComponent } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextForm, TextLink } from '../form';
import CategoryCourseItem from './CategoryCourseItem';
import { COURSE_SCREEN, LESSON_SCREEN } from '../../constants/NavigatorConstants';
import { FONT_XS, FONT_SM } from '../../constants/FontConstants';
import { COLOR_ORANGE } from '../../constants/ColorConstants';

export default class CategoryItem extends PureComponent {

    _onGoToCourseScreen = (courseId) => {
        const { navigation } = this.props;
        navigation.navigate(COURSE_SCREEN);
    }

    _onGoToLessonScreen = (lessonId) => {
        const { navigation } = this.props;
        navigation.navigate(LESSON_SCREEN);
    }

    render() {
        const { category, index } = this.props;
        return (
            <View style={styles.containerStyle}>
                <View style={styles.titleBoxStyle}>
                    <TextForm style={styles.titleStyle}>{category.name}</TextForm>
                    <TextLink 
                        style={styles.textLinkStyle}
                        funcHandler={ () => this._onGoToCourseScreen(category.id) }>
                            Xem tất cả
                    </TextLink>
                </View>
                <ScrollView horizontal={true} style={styles.wrapperStyle}>
                    {
                        category.courses.map((item, index) => {
                            return <CategoryCourseItem
                                key={index}
                                course={item}
                                funcHandler={ () => this._onGoToLessonScreen }
                            />
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        marginBottom: 10,
        paddingTop: 10,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        borderColor: '#dadada',
        shadowColor: "#333",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    wrapperStyle: {
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    titleBoxStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    titleStyle: {
        fontWeight: '600',
        fontSize: FONT_SM
    },
    textLinkStyle: {
        fontSize: FONT_XS,
        color: COLOR_ORANGE,
        fontWeight: '600'
    }
})
