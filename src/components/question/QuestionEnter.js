import React, { Component, Fragment } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { COLOR_WHITE, COLOR_GRAY } from '../../constants/ColorConstants';
import { FONT_SM, FONT_XS } from '../../constants/FontConstants';
import QuestionBar from './QuestionBar';

export default class QuestionEnter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quiz: '',
            answers: '',
            results: [],
            hints: []
        }
    }

    componentDidMount = () => {
        const { quiz, answers } = this.props;
        const hints = [ ...answers ];
        hints.sort((item1, item2) => Math.random() - Math.random());
        this.setState({
            quiz,
            answers,
            hints
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { answers, quiz } = nextProps;

        if(quiz === prevState.quiz) return null;

        const hints = [ ...answers ];
        hints.sort((item1, item2) => Math.random() - Math.random());
        return {
            quiz: quiz,
            answers: answers,
            hints: hints,
            results: []
         };
    }

    /**
    * Hàm xử lý khi người dùng nhập đáp án
    * Nguyễn Tiến  Hoàng
    */
    _onEnterAnswer = (text, index) => {
        const { results, answers } = this.state;
        const { funcHandler } = this.props;
        let checked = true;

        // Thay đổi câu trả lời tại vị trí index của mảng result
        results[index] = text.toLowerCase();
        this.setState({ results });

        // Kiểm tra đáp án
        if(answers.length !== results.length){
            checked = false;
        }
        else{
            for (let i = 0; i < answers.length; i++) {
                if (answers[i].toLowerCase() !== results[i].toLowerCase()) {
                    checked = false;
                    break;
                }
            }
        }
        funcHandler(checked, true);
    }

    /**
    * Hàm xử lý khi người dùng chọn đáp án
    * Nguyễn Tiến Hoàng
    */
    _onChooseAnswer = (text) => {
        const { results, answers } = this.state;
        const { funcHandler } = this.props;
        let checked = true;

        // Set lựa chọn cho ô input
        for (let i = 0; i < answers.length; i++) {
            // Nếu vị trí index trong mảng đã có đáp án thì bỏ qua
            if (results[i] && results[i].length > 0) {
                continue;
            }
            else { // Nếu vị trí index trong mảng chưa có đáp án thì thêm vào
                results[i] = text;
                break;
            }
        }
        this.setState({ results });
        // Kiểm tra đáp án
        if(answers.length !== results.length){
            checked = false;
        }
        else{
            for (let i = 0; i < answers.length; i++) {
                if (answers[i].toLowerCase() !== results[i].toLowerCase()) {
                    checked = false;
                    break;
                }
            }
        }
        funcHandler(checked, true);
    }

    /**
     * Hàm refresh câu trả lời
     * Nguyễn Tiến Hoàng
     */
    _onResetAnswer = () => {
        const { results } = this.state;
        const { funcHandler } = this.props;

        for (let i = 0; i < results.length; i++) {
            results[i] = '';
        }
        this.setState({ results });
        funcHandler(false, false);
    }

    /**
    * Hàm mở khoá câu trả lời + trừ điểm tích luỹ
    * Nguyễn Tiến Hoàng
    */
    _onUnlockAnswer = () => {
        const { funcHandler } = this.props;
        const { results, answers } = this.state;

        for (let i = 0; i < answers.length; i++) {
            results[i] = answers[i];
        }
        this.setState({ results });
        funcHandler(true, true);
    }

    // Hàm thay thế các ký tự trong câu hỏi
    _replaceCharactor = (strQuiz) => {
        // Thay thế thẻ <br> bằng \n
        strQuiz = strQuiz.trim().replace(/(<br>|<\/br>)/g, '\n');
        // Cắt chuỗi câu hỏi (Gặp chuỗi ký tự dang [[1}} thì sẽ cắt)
        return strQuiz.split(/\[[[1-9]*}}/g);
    }

    _renderQuiz = () => {
        const { results, quiz } = this.state;
        const arrQuiz = this._replaceCharactor(quiz);
        return <Fragment>
            {
                arrQuiz.map((item, index) => {
                    if (index < arrQuiz.length - 1) {
                        return <Fragment key={index}>
                            <Text style={styles.textStyle}>{item.trim()}</Text>
                            <TextInput
                                name={'results' + index}
                                style={styles.inputStyle}
                                onChangeText={(text) => this._onEnterAnswer(text, index)}
                                value={results[index]}
                            />
                        </Fragment>
                    }
                    return <Text style={styles.textStyle} key={index}>{item.trim()}</Text>
                })
            }
        </Fragment>
    }


    _renderHintItem = () => {
        const { hints } = this.state;
        if((typeof hints[0]) === "string"){
            return hints.map((item, index) => {
                return <TouchableOpacity
                    key={index}
                    onPress={() => this._onChooseAnswer(item)}>
                    <Text style={styles.hintItemStyle}>{item}</Text>
                </TouchableOpacity>
            })
        }
    }

    render() {
        return (
            <Fragment>
                <Text style={styles.quizStyle}>
                    Điền (hoặc chọn) từ còn thiếu vào đoạn văn bản bên dưới.
                </Text>
                <View style={styles.wrapperStyle}>
                    {this._renderQuiz()}
                </View>
                <View style={styles.hintBoxStyle}>
                    {this._renderHintItem()}
                </View>
                <QuestionBar
                    funcResetHandler={this._onResetAnswer}
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
    wrapperStyle: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    },
    textStyle: {
        lineHeight: 30,
        fontSize: FONT_SM,
        color: COLOR_GRAY
    },
    inputStyle: {
        paddingHorizontal: 5,
        height: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLOR_GRAY,
        minWidth: 30,
        textAlign: 'center',
        fontSize: FONT_XS,
        fontWeight: '600',
        margin: 10
    },
    hintBoxStyle: {
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    hintItemStyle: {
        fontSize: FONT_XS,
        fontWeight: '600',
        padding: 8,
        marginHorizontal: 10,
        backgroundColor: COLOR_WHITE,
        shadowColor: COLOR_GRAY,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 2
        }
    }
})
