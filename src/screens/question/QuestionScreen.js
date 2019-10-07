import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
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

const { width } = Dimensions.get('window');
class QuestionScreen extends Component {

    constructor(props) {
        super(props);
    }

    _onGoToQuizScreen = () => {
        this.props.navigation.navigate(QUIZ_SCREEN);
    }

    _onGoBackLessonScreen = () => {
        this.props.navigation.navigate(LESSON_SCREEN);
    }

    _renderImage = (image) => {
        return image ? <View style={styles.imageBoxStyle}>
            <Image
                source={{ uri: image }}
                resizeMode="contain"
                style={styles.imageStyle}
            />
        </View> : null;
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
                    title={title}
                />
                <ScrollView style={styles.wrapperStyle}>
                    {
                        this._renderImage(image)
                    }
                    <HTMLView
                        value={theory}
                        stylesheet={styles}
                    />
                </ScrollView>
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
    imageBoxStyle: {
        width: width - 40,
        height: (width - 40) * 3 / 4,
        marginBottom: 10
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    htmlViewStyle: {
        fontSize: FONT_SM
    }
})
