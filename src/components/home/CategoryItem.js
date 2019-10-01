import React, { PureComponent } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextForm, TextLink } from '../form';
import CategoryCourseItem from './CategoryCourseItem';
import { COURSE_SCREEN, LESSON_SCREEN } from '../../constants/NavigatorConstants';
import { FONT_XS, FONT_MD } from '../../constants/FontConstants';
import { COLOR_ORANGE } from '../../constants/ColorConstants';


export default class CategoryItem extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount = () => {
        this.setState({
            courses: [
                {
                    "id": "1",
                    "name": "Html",
                    "isActive": "true",
                    "image": "https://freeiconshop.com/wp-content/uploads/edd/html-flat.png",
                    "topicId": "1"
                },
                {
                    "id": "2",
                    "name": "Css",
                    "isActive": "false",
                    "image": "https://dh42.com/wp-content/uploads/2014/01/1464234885_css.png",
                    "topicId": "1"
                },
                {
                    "id": "3",
                    "name": "Javascript",
                    "isActive": "false",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IG9LRECaSHCx1yrg74Oy6_QWHmYqnQMwY_Vcb25cYd1Ie_YEOA",
                    "topicId": "1"
                },
                {
                    "id": "4",
                    "name": "Bootstrap",
                    "isActive": "false",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OQIVetwzcD611FUAA60n0zu6vki9iJKxMsCcSu_pvhSxQC0VkA",
                    "topicId": "1"
                },
                {
                    "id": "5",
                    "name": "Sass",
                    "isActive": "false",
                    "image": "https://cdn.shopify.com/s/files/1/0154/2777/products/sass-detail-04_1024x1024.jpg?v=1501879919",
                    "topicId": "1"
                }
            ]
        })
    }

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
        const { courses } = this.state;
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
                        courses.map((item, index) => {
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
        marginBottom: 10
    },
    wrapperStyle: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingVertical: 10
    },
    titleBoxStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    titleStyle: {
        fontWeight: '600',
        fontSize: FONT_MD
    },
    textLinkStyle: {
        fontSize: FONT_XS,
        color: COLOR_ORANGE,
        fontWeight: '600'
    }
})
