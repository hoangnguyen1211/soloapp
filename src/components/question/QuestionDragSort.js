import React, { Component, Fragment } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { COLOR_GRAY, COLOR_ORANGE, COLOR_WHITE } from '../../constants/ColorConstants';
import { FONT_XS } from '../../constants/FontConstants';
import QuestionBar from './QuestionBar';

export default class QuestionDragSort extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            quiz: ''
        }
    }

    componentDidMount = () => {
        const { data, quiz } = this.props;
        data.sort((item1, item2) => Math.random() - Math.random());
        this.setState({
            answers: data,
            quiz: quiz
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { data, quiz } = nextProps;
        if(quiz === prevState.quiz) return null;
        data.sort((item1, item2) => Math.random() - Math.random());
        return { 
            ...prevState, 
            quiz: quiz,
            answers: data
         };
    }

    _onSelectedAnswer = (data) => {
        const { funcHandler } = this.props;
        let status = true;
        for (let i = 0; i < data.length; i++) {
            const index = JSON.parse(data[i].orderIndex);
            if ((i + 1) !== index) {
                status = false;
                break;
            }
        }
        this.setState({ answers: data });
        funcHandler(status, true);
    }

    // Hàm reset
    _onResetAnswer = () => {
        const { answers } = this.state;
        const { funcHandler } = this.props;
        const newArray = answers.sort((item1, item2) => Math.random() - Math.random());
        this.setState({ answers: newArray });
        funcHandler(false, false);
    }

    // Hàm show gợi ý
    _onShowHintAnswer = () => {

    }

    /**
    * Hàm mở khoá câu trả lời + trừ điểm tích luỹ
    * Nguyễn Tiến Hoàng
    */
    _onUnlockAnswer = () => {
        const { answers } = this.state;
        const { funcHandler } = this.props;
        const newArray = answers.sort((item1, item2) => parseInt(item1.orderIndex) - parseInt(item2.orderIndex));
        this.setState({ answers: newArray });
        funcHandler(true, true);
    }

    _renderAnswerItem = ({ item, index, move, moveEnd, isActive }) => {
        return (
            <TouchableOpacity
                style={[styles.itemAnswer, { borderColor: isActive ? COLOR_ORANGE : COLOR_WHITE }]}
                onLongPress={move}
                onPressOut={moveEnd}
            >
                <Text style={styles.itemLabel}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { answers, quiz } = this.state;
        return (
            <Fragment>
                <Text style={styles.quizStyle}>
                    { quiz }
                </Text>
                <View style={[styles.anwserStyle, { height: 80 * answers.length }]}>
                    <DraggableFlatList
                        contentContainerStyle={{
                            padding: 2,
                            flex: 1
                        }}
                        data={answers}
                        renderItem={ this._renderAnswerItem}
                        keyExtractor={(item, index) => `draggable-item-${index}`}
                        scrollPercent={2}
                        onMoveEnd={({ data }) => this._onSelectedAnswer(data)}
                    />
                </View>
                <QuestionBar
                    funcResetHandler={this._onResetAnswer}
                    funcShowHintHandler={this._onShowHintAnswer}
                    funcUnlockHandler={this._onUnlockAnswer}
                />
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    quizStyle: {
        marginTop: 20,
        fontWeight: '600'
    },
    anwserStyle: {
        marginTop: 20,
        marginBottom: 10
    },
    itemAnswer: {
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 7,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: COLOR_WHITE,
        color: COLOR_GRAY,
        shadowColor: COLOR_GRAY,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 }
    },
    itemLabel: {
        fontSize: FONT_XS,
        fontWeight: '600',
        color: COLOR_GRAY,
        marginLeft: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontWeight: '600'
    }
})