import React, { PureComponent, Fragment } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextForm } from '../form';
import { COLOR_GRAY, COLOR_ORANGE, COLOR_WHITE } from '../../constants/ColorConstants';
import { FONT_XS } from '../../constants/FontConstants';
import QuestionBar from './QuestionBar';

export default class QuestionRadio extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            quiz: ''
        }
    }

    componentDidMount = () => {
        const { data, quiz } = this.props;
        this.setState({
            answers: data,
            quiz: quiz
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { data, quiz } = nextProps;
        if(quiz === prevState.quiz) return null;
        return {
            ...prevState,
            quiz: quiz,
            answers: data
        };
    }

    _onSelectedAnswer = (i) => {
        const { funcHandler } = this.props;
        const { answers } = this.state;
        let status = false;

        const newArray = answers.map((item, index) => {
            if (i === index) {
                status = JSON.parse(item.status);
                return { ...item, checked: true };
            }
            return { ...item, checked: false };
        });

        this.setState({ answers: newArray });
        funcHandler(status, true);
    }

    // Hàm reset
    _onResetAnswer = () => {
        const { funcHandler } = this.props;
        const { answers } = this.state;
        const newArray = answers.map((item, index) => {
            // Đặt checked lại bằng giá trị false
            return { ...item, checked: false };
        });
        this.setState({ answers: newArray });
        funcHandler(false, false);
    }

    // Hàm show gợi ý
    _onShowHintAnswer = () => {

    }

    // Hàm mở đáp án
    _onUnlockAnswer = () => {
        const { funcHandler } = this.props;
        const { answers } = this.state;
        const newArray = answers.map((item, index) => {
            const status = JSON.parse(item.status);
            return { ...item, checked: status };
        });
        this.setState({ answers: newArray });
        funcHandler(true, true);
    }

    _renderRadioItem = () => {
        const { answers } = this.state;
        return answers.map((item, index) => {
            return <TouchableOpacity key={index} onPress={() => this._onSelectedAnswer(index)}>
                <View style={[
                    styles.radioItemStyle,
                    item.checked ? styles.radioItemCheckedStyle : null
                ]}>
                    <View style={[
                        styles.checkOuterStyle,
                        { borderColor: item.checked ? COLOR_ORANGE : "#999" }
                    ]}>
                        <View style={[
                            styles.checkInnerStyle,
                            { display: item.checked ? 'flex' : 'none' }
                        ]}></View>
                    </View>
                    <TextForm style={styles.textStyle}>{item.name}</TextForm>
                </View>
            </TouchableOpacity>
        })
    }

    render() {
        const { quiz } = this.state;
        return (
            <Fragment>
                <TextForm style={styles.quizStyle}>
                    {quiz}
                </TextForm>
                <View style={styles.anwserStyle}>
                    {
                        this._renderRadioItem()
                    }
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
        marginVertical: 20,
        fontWeight: '600'
    },
    anwserStyle: {
        marginTop: 20
    },
    radioItemStyle: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: COLOR_GRAY,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 2
        },
        backgroundColor: COLOR_WHITE
    },
    checkOuterStyle: {
        marginRight: 10,
        padding: 4,
        width: 18,
        height: 18,
        borderRadius: 9,
        borderColor: COLOR_ORANGE,
        borderWidth: 1
    },
    checkInnerStyle: {
        flex: 1,
        backgroundColor: COLOR_ORANGE,
        borderRadius: 4
    },
    textStyle: {
        marginBottom: 0,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontWeight: '600',
        fontSize: FONT_XS
    },
    radioItemCheckedStyle: {
        shadowOpacity: 0,
        borderColor: COLOR_ORANGE,
        borderWidth: 2
    }
})
