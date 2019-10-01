import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { HorizontalGradient } from '../gradient';
import { TextForm } from '../form';
import { COLOR_WHITE, COLOR_GRAY, COLOR_GREEN } from '../../constants/ColorConstants';
import { FONT_XS } from '../../constants/FontConstants';

export default class ChapterItem extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            lessons: [],
            hint: true
        }
    }

    componentDidMount = () => {
        const { chapter } = this.props;
        this.setState({
            lessons: chapter.lessons
        })
    }

    _renderLessonItem = () => {
        const { lessons } = this.state;
        const { funcHandler } = this.props;
        return lessons.map((item, index) => {
            const isActive = JSON.parse(item.isActive);
            return <TouchableOpacity style={{flex: 1}} onPress={ () => funcHandler(item.id) }>
                <View style={styles.lessonItemStyle} key={index}>
                    {/* IN RA ICON CUA LESSON */}
                    {this._renderLessonIcon(isActive)}
                    <TextForm style={styles.textStyle}>
                        Introduction to HTML
                </TextForm>
                </View>
            </TouchableOpacity>
        })
    }

    _renderLessonIcon = (isActive) => {
        const color = isActive ? COLOR_GREEN : COLOR_GRAY;
        return <View style={[styles.iconWrapperStyle, { borderColor: color }]}>
            <Icon
                type='font-awesome'
                name={isActive ? 'check' : 'lock'}
                size={12}
                color={color}
            />
        </View>
    }

    _showLessonContent = (i) => {
        const { hint } = this.state;
        this.setState({
            hint: !hint
        })
    }

    render() {
        const { chapter, index } = this.props;
        const { hint } = this.state;
        return (
            <View style={styles.containerStyle}>
                <View style={styles.chapterWrapperStyle}>
                    <TouchableHighlight onPress={() => this._showLessonContent()} style={{ flex: 1 }}>
                        <HorizontalGradient style={styles.chapterTitleStyle}>
                            <View style={styles.titleLeftStyle}>
                                <View style={styles.iconTitleStyle}>
                                    <Icon
                                        type='font-awesome'
                                        name='book'
                                        size={15}
                                        color={COLOR_WHITE}
                                    />
                                </View>
                                <TextForm style={styles.titleStyle}>
                                    {chapter.name}
                                </TextForm>
                            </View>
                            <Icon
                                type='ionicon'
                                name={hint ? 'ios-arrow-down' : 'ios-arrow-up'}
                                size={15}
                                color={COLOR_WHITE}
                            />
                        </HorizontalGradient>
                    </TouchableHighlight>
                    <View style={[styles.chapterContentStyle, { display: hint ? 'none' : 'flex' }]}>
                        {this._renderLessonItem()}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    chapterWrapperStyle: {

    },
    chapterTitleStyle: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: COLOR_WHITE,
        shadowColor: COLOR_GRAY,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    titleLeftStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleStyle: {
        fontWeight: '600',
        marginBottom: 0,
        color: COLOR_WHITE
    },
    iconTitleStyle: {
        width: 25,
        height: 25,
        borderRadius: 13,
        borderColor: COLOR_WHITE,
        borderWidth: 1,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chapterContentStyle: {
        paddingTop: 8
    },
    lessonItemStyle: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconWrapperStyle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 1,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        marginBottom: 0,
        fontSize: FONT_XS,
        fontWeight: '600'
    }
})
