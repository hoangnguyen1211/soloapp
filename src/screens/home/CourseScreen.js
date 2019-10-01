import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { BaseScreen } from '../base';
import { Header } from '../../components/base';
import { CourseItem, LearnHeader } from '../../components/learning';
import { HOME_SCREEN, LESSON_SCREEN } from '../../constants/NavigatorConstants';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/CourseActions';

class CourseScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount = () => {
        const topicId = this.props.navigation.getParam('topicId');
        // Nếu topicId gửi qua khác với topicId cũ thì gọi store lấy dữ liệu mới
        if (topicId) {
            this.props.getAllCourseByTopic(topicId);
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return { ...prevState, courses: nextProps.courses };
    }

    _onGoToLessonScreen = (courseId, title) => {
        this.props.navigation.navigate(LESSON_SCREEN, {
            title,
            courseId
        });
    }

    _onGoBackHome = () => {
        this.props.navigation.navigate(HOME_SCREEN);
    }

    render() {
        const { courses } = this.state;
        const title = this.props.navigation.getParam('title');
        return (
            <BaseScreen nopadding >
                <Header funcGoBack={this._onGoBackHome} />
                <LearnHeader title={title} text={`${courses.length} khoá học`} />
                <ScrollView>
                    <View style={styles.wrapper}>
                        <FlatList
                            data={this.state.courses}
                            renderItem={({ item, index }) =>
                                <CourseItem
                                    course={item}
                                    index={index}
                                    funcHandler={this._onGoToLessonScreen}
                                />
                            }
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={2}
                        />
                    </View>
                </ScrollView>
            </BaseScreen>
        )
    }
}
function mapState(state) {
    const { courseReducer } = state;
    return {
        courses: courseReducer.courses
    }
}

function mapDispatch(dispatch) {
    return {
        getAllCourseByTopic(topicId) {
            dispatch(actions.getAllCourseByTopic(topicId));
        }
    }
}

export default connect(mapState, mapDispatch)(CourseScreen)

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 5,
        paddingVertical: 15
    }
})
