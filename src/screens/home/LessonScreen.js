import React, { Component, Fragment } from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight, Alert } from 'react-native';
import { BaseScreen } from '../base';
import { Icon } from 'react-native-elements';
import { Header } from '../../components/base';
import { LessonItem, LearnHeader, ChapterItem } from '../../components/learning';
import { COURSE_SCREEN, QUESTION_SCREEN } from '../../constants/NavigatorConstants';
import { COLOR_GRAY } from '../../constants/ColorConstants';
import { connect } from 'react-redux';
import * as lessonActions from '../../redux/actions/LessonActions';
import * as questionActions from '../../redux/actions/QuestionActions';

class LessonScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lessons: [],
            chapters: [],
            type: true
        }
    }

    componentDidMount = () => {
        const courseId = this.props.navigation.getParam('courseId');
        // Nếu courseId gửi qua khác với courseId cũ thì gọi store lấy dữ liệu mới
        if(courseId){
            this.props.getAllLessonByCourse(courseId);
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return { ...prevState, lessons: nextProps.lessons };
    }

    _renderLessonList = () => {
        const { type } = this.state;
        if (type)
            return <FlatList
                data={this.state.lessons}
                renderItem={({ item, index }) =>
                    <LessonItem
                        lesson={item}
                        index={index}
                        funcHandler={this._onGoToQuestionScreen}
                    />
                }
                keyExtractor={(item, index) => index.toString()}
                numColumns={1}
            />

        return <FlatList
            data={this.state.chapters}
            renderItem={({ item, index }) =>
                <ChapterItem
                    chapter={item}
                    index={index}
                    funcHandler={this._onGoToQuestionScreen}
                />
            }
            keyExtractor={(item, index) => index.toString()}
            numColumns={1}
        />
    }

    _renderIconSwitch = () => {
        return <Fragment>
            <TouchableHighlight 
                style={styles.switchIconStyle} 
                onPress={() => this._onSwitchList(true)}>
                <Icon
                    type='font-awesome'
                    name='list'
                    size={20}
                    color={COLOR_GRAY}
                />
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.switchIconStyle} 
                onPress={() => this._onSwitchList(false)}>
                <Icon
                    type='font-awesome'
                    name='tasks'
                    size={20}
                    color={COLOR_GRAY}
                />
            </TouchableHighlight>
        </Fragment>
    }

    _onSwitchList = (status) => {
        this.setState({
            type: status
        })
    }

    _onGoToQuestionScreen = (lessonId, title) => {
        const { navigation, getNextQuestion }  = this.props;
        getNextQuestion(lessonId, title);
        navigation.navigate(QUESTION_SCREEN);
    }

    _onGoBackCourseScreen = () => {
        this.props.navigation.navigate(COURSE_SCREEN);
    }

    render() {
        const { navigation, totalQuestion, lessons } = this.props;
        const title = navigation.getParam('title');
        return (
            <BaseScreen nopadding >
                <Header 
                    funcGoBack={this._onGoBackCourseScreen}
                    navigation={navigation}
                />
                <LearnHeader title={ title } text={`${ lessons.length } bài học | ${ totalQuestion } bài tập`} />
                <View style={styles.wrapper}>
                    <View style={styles.switchIconBoxStyle}>
                        { this._renderIconSwitch() }
                    </View>
                    {this._renderLessonList()}
                </View>
            </BaseScreen>
        )
    }
}

function mapState(state) {
    const { lessonReducer } = state;
    return {
        totalQuestion: lessonReducer.totalQuestion,
        lessons: lessonReducer.lessons
    }
}

function mapDispatch(dispatch) {
    return {
        getAllLessonByCourse(courseId) {
            dispatch(lessonActions.getAllLessonByCourse(courseId));
        },
        getNextQuestion(lessonId, title) {
            dispatch(questionActions.getAllQuestionByLesson(lessonId, title));
        }
    }
}

export default connect(mapState, mapDispatch)(LessonScreen);

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 5,
        paddingVertical: 15
    },
    switchIconBoxStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10
    },
    switchIconStyle: {
        borderColor: '#f2f2f2',
        borderWidth: 1,
        borderRadius: 2,
        width: 40,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    }
})
