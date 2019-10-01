import React, { Fragment, PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { TextForm } from '../form';
import { COLOR_GRAY, COLOR_ORANGE, COLOR_WHITE, COLOR_SKY } from '../../constants/ColorConstants';
import { FONT_XS } from '../../constants/FontConstants';
import QuestionBar from './QuestionBar';

export default class QuestionCheckBox extends PureComponent {

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

    // Hàm cập nhật lại trạng thái checked cho từng phần tử
    // Trả về mảng mới sau khi người dùng click vào checkbox
    _onSelectedAnswer = (itemIndex) => {
        const { funcHandler } = this.props;
        const { answers } = this.state;
        let status = true;
        const newArray = answers.map((item, index) => {
            // Kiểm tra vị trí người dùng đang click => Cập nhật lại trạng thái checked
            if (itemIndex === index) {
                // Cập nhật lại trạng thái checked
                return { ...item, checked: !item.checked };
            }
            // Nếu không trùng vị trí index thì không cập nhật
            return { ...item, checked: (item.checked ? item.checked : false) };
        });

        for (let item of newArray) {
            if (item.checked !== JSON.parse(item.status)) {
                status = false;
                break;
            }
        }

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

    _renderChexBoxItem = () => {
        const { answers } = this.state;
        return answers.map((item, index) => {
            return <TouchableOpacity key={index} onPress={() => this._onSelectedAnswer(index)}>
                <View style={[
                    styles.radioItemStyle,
                    item.checked ? styles.radioItemCheckedStyle : null
                ]}>
                    <View style={styles.iconGroupStyle}>
                        <View style={[
                            styles.checkOuterStyle,
                            { borderColor: item.checked ? COLOR_ORANGE : "#999" }
                        ]}></View>
                        <Icon
                            type='font-awesome'
                            name='check'
                            size={18}
                            color={COLOR_SKY}
                            containerStyle={[
                                styles.checkIconStyle,
                                { display: item.checked ? 'flex' : 'none' }
                            ]}
                            iconStyle={{ zIndex: 100 }}
                        />
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
                        this._renderChexBoxItem()
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
    iconGroupStyle: {
        width: 20,
        height: 20,
        marginRight: 10,
        position: 'relative'
    },
    checkOuterStyle: {
        width: 18,
        height: 18,
        borderColor: COLOR_ORANGE,
        borderWidth: 1
    },
    checkIconStyle: {
        position: 'absolute',
        left: 4,
        top: -2,
        zIndex: 10
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
