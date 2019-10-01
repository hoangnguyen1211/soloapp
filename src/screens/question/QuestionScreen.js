import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { BaseScreen } from '../base';
import { QuestionHeader, QuestionButton } from '../../components/question';
import { 
    LESSON_SCREEN, 
    QUIZ_SCREEN
} from '../../constants/NavigatorConstants';
import { FONT_SM } from '../../constants/FontConstants';
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/QuestionActions';

class QuestionScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            theory: '',
            image: '',
            video: ''
        }
    }

    _onGoToQuizScreen = () => {
        this.props.navigation.navigate(QUIZ_SCREEN);
    }

    _onGoBackLessonScreen = () => {
        this.props.navigation.navigate(LESSON_SCREEN);
    }

    render() {
        const { navigation, question } = this.props;
        const { title, theory, image, video } = question;
        return (
            <BaseScreen nopadding>
                <QuestionHeader
                    navigation={navigation}
                    index={question.index}
                    total={question.totalQuestion}
                    title={ title }
                />
                <View style={styles.wrapperStyle}>
                    <HTMLView
                        value={theory}
                        stylesheet={styles}
                    />
                </View>
                <QuestionButton
                    funcHandler={this._onGoToQuizScreen}
                />
            </BaseScreen>
        )
    }
}

function mapState(state) {
    return { question: state.questionReducer }
}

function mapDispatch(dispatch) {
    return {
        getAllQuestionByLesson(lessonId) {
            dispatch(actions.getAllQuestionByLesson(lessonId))
        }
    }
}

export default connect(mapState, mapDispatch)(QuestionScreen);

const styles = StyleSheet.create({
    wrapperStyle: {
        padding: 20
    },
    htmlViewStyle: {
        fontSize: FONT_SM
    }
})
