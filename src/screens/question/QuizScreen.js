import React, { Component, createRef } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { BaseScreen } from '../base';
import {
    QuestionHeader,
    QuestionFooter,
    QuestionRadio,
    QuestionCheckBox,
    QuestionDragSort,
    QuestionEnter,
    QuestionOverlay
} from '../../components/question';
import * as quizTypes from '../../constants/QuizTypeConstants';
import { QUESTION_SCREEN, LESSON_SCREEN } from '../../constants/NavigatorConstants';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/QuestionActions';
import * as userInfoService from '../../services/UserInfoService';

const { width } = Dimensions.get('window');
class QuizScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }

        this.footerComponent = createRef();
        this.overlayComponent = createRef();
    }

    // Hàm cập nhật lựa chọn câu trả lời của người dùng
    _onUpdateAnswer = (checked, buttonVisible) => {
        // answers => Cập nhật lại mảng câu hỏi sau khi người dùng click chọn đáp án
        // checked => Cập nhật lại trạng thái đáp án của người dùng đã đúng với kết quả chưa
        // buttonVisible => Ẩn hiện button check kết quả
        this.setState({
            checked
        });
        this.footerComponent.current._toggleCheckedButton(buttonVisible);
    }

    // Hàm kiểm tra kết quả câu trả lời của người dùng
    _onCheckedAnswerResult = () => {
        const { checked } = this.state;
        this.footerComponent.current._showQuestionNotify(checked);
    }

    // Hàm chuyển qua câu hỏi tiếp theo
    _onGoToNextQuestion = () => {
        const { navigation, question, getNextQuestion } = this.props;
        const { index, totalQuestion } = question;
        // Kiểm tra xem có phải là câu hỏi cuối cùng trong mảng chưa
        if (index < (totalQuestion - 1)) {
            // Nếu chưa phải thì chuyển qua câu tiếp theo
            getNextQuestion();
            navigation.navigate(QUESTION_SCREEN);
        }
        else {
            // Nếu là câu cuối cùng rồi thì show thông báo đã hoàn thành
            userInfoService.updateUserInfoSuccess();
            this.overlayComponent.current._onShowSuccessOverlay();
        }
    }

    _onRamdomQuiz = () => {
        this.props.getQuizRelate();
        this.footerComponent.current._toggleCheckedButton(false);
    }

    _onAgainQuestion = () => {
        this.overlayComponent.current._onHideSuccessOverlay();
        this.props.getFirtQuestion();
    }

    _onGoToNextLesson = () => {
        this.overlayComponent.current._onHideSuccessOverlay();
        this.props.navigation.navigate(LESSON_SCREEN);
    }

    // Hàm hiển thị đáp án của câu hỏi theo từng loại
    _renderAnswerList = (quizType, answers, quiz) => {
        quizType = quizType.toLowerCase();
        switch (quizType) {
            case quizTypes.RADIO_TYPE:
                return <QuestionRadio
                    data={answers}
                    quiz={quiz}
                    funcHandler={this._onUpdateAnswer}
                />
            case quizTypes.CHECK_BOX_TYPE:
                return <QuestionCheckBox
                    data={answers}
                    quiz={quiz}
                    funcHandler={this._onUpdateAnswer}
                />
            case quizTypes.DRAG_SORT_TYPE:
                return <QuestionDragSort
                    data={answers}
                    quiz={quiz}
                    funcHandler={this._onUpdateAnswer}
                />
            case quizTypes.ENTER_TYPE:
                return <QuestionEnter
                    quiz={quiz}
                    answers={answers}
                    funcHandler={this._onUpdateAnswer}
                />
            default:
                break;
        }

    }

    render() {
        const { navigation, question } = this.props;
        return (
            <BaseScreen nopadding>
                <QuestionHeader
                    navigation={navigation}
                    index={question.index}
                    total={question.totalQuestion}
                    title={ question.title }
                />
                <View style={styles.imageBoxStyle}>
                    <Image 
                        source={{ uri: "https://i.imgur.com/gME5Tjn.png" }}
                        resizeMode="contain"
                        style={styles.imageStyle}
                    />
                </View>
                <View style={styles.wrapperStyle}>
                    {this._renderAnswerList(question.type, question.answers, question.quiz)}
                </View>
                <QuestionFooter
                    ref={this.footerComponent}
                    checkedAnswerHandler={this._onCheckedAnswerResult}
                    goToQuestionScreen={this._onGoToNextQuestion}
                    randomQuiz={this._onRamdomQuiz}
                />
                <QuestionOverlay
                    ref={this.overlayComponent}
                    onAgainQuestion={this._onAgainQuestion}
                    onGoToNextLesson={this._onGoToNextLesson}
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
        getNextQuestion() {
            dispatch(actions.getNextQuestion())
        },
        getQuizRelate() {
            dispatch(actions.getQuizRelate())
        },
        getFirtQuestion(){
            dispatch(actions.getFirtQuestion())
        }
    }
}

export default connect(mapState, mapDispatch)(QuizScreen);

const styles = StyleSheet.create({
    wrapperStyle: {
        paddingHorizontal: 20
    },
    imageBoxStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        width: width,
        height: (width * 0.6) * 3 / 4,
        marginBottom: 10
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    }
})