import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { COLOR_GREEN, COLOR_WHITE } from '../../constants/ColorConstants';
import { Icon } from 'react-native-elements';
import QuestionButton from './QuestionButton';

const { width } = Dimensions.get('window');

export default class QuestionSuccess extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            xValue: new Animated.Value(-width),
            bgColor: new Animated.Value(0),
            positionIcon: new Animated.Value(60),
            positionLine: new Animated.Value(0),
            scalePoint: new Animated.Value(0)
        }
    }

    _showSuccessNotify = () => {
        Animated.timing(this.state.xValue, {
            toValue: 0,
            duration: 500
        }).start();

        Animated.timing(this.state.bgColor, {
            toValue: 6,
            duration: 1100
        }).start();

        Animated.timing(this.state.positionIcon, {
            toValue: -30,
            duration: 1200
        }).start();

        Animated.timing(this.state.positionLine, {
            toValue: 3,
            duration: 1000
        }).start();

        Animated.timing(this.state.scalePoint, {
            toValue: 1,
            duration: 1000
        }).start();        
    }

    _hideSuccessNotify = () => {
        Animated.timing(this.state.xValue, {
            toValue: -width,
            duration: 700
        }).start();

        this.setState({
            bgColor: new Animated.Value(0),
            positionIcon: new Animated.Value(60),
            positionLine: new Animated.Value(0)
        });
    }

    _onGoToQuestionScreen = () => {
        const { goToQuestionScreen } = this.props;
        this._hideSuccessNotify();
        goToQuestionScreen();
    }

    render() {
        let bgColor = this.state.bgColor.interpolate({
            inputRange: [0, 4, 6],
            outputRange: [COLOR_WHITE, COLOR_WHITE, COLOR_GREEN]
        });
        let positionLine = this.state.positionLine.interpolate({
            inputRange: [0, 1, 3],
            outputRange: [-width / 2, -width / 4, 0]
        });
        
        const { xValue, positionIcon, scalePoint } = this.state;

        return (
            <Animated.View style={[styles.container,  { width: width, bottom: xValue }]}>
                <View style={styles.wapper}>
                    <Animated.View style={[styles.flag, {
                        transform: [
                            { translateY: positionIcon }
                        ]
                    }]}>
                        <Text style={styles.flagItem}>\</Text>
                        <Text style={styles.flagItem}>|</Text>
                        <Text style={styles.flagItem}>/</Text>
                    </Animated.View>
                    <Animated.View style={[styles.line, { left: positionLine }]}></Animated.View>
                    <Animated.View style={[styles.circlePoint, {
                        backgroundColor: bgColor,
                        transform: [
                            { translateY: -17 },
                            { scale: scalePoint }
                        ]
                    }]}>
                        <Text style={[styles.text, { color: COLOR_WHITE }]}>+</Text>
                        <Icon
                            name='bolt'
                            type='font-awesome'
                            color={COLOR_WHITE}
                            size={15}
                        />
                        <Text style={[styles.text, { color: COLOR_WHITE }]}>10</Text>
                    </Animated.View>
                </View>
                <QuestionButton
                    name="arrow-right"
                    backgroundColor={COLOR_GREEN}
                    style={{ marginTop: 40 }}
                    funcHandler={this._onGoToQuestionScreen}
                />
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 170,
        backgroundColor: COLOR_WHITE,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'hidden'
    },
    wapper: {
        height: 60,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        height: 4,
        width: width,
        backgroundColor: COLOR_GREEN
    },
    circlePoint: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 30,
        borderWidth: 2,
        borderColor: COLOR_GREEN,
        backgroundColor: COLOR_WHITE,
        borderRadius: 20
    },
    text: {
        color: COLOR_GREEN,
        fontWeight: '600',
        fontSize: 16,
        marginHorizontal: 3
    },
    flag: {
        height: 20,
        width: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10
    },
    flagItem: {
        color: COLOR_GREEN,
        fontWeight: 'bold',
        fontSize: 20
    },
    btnNext: {
        padding: 15,
        marginTop: 10,
        backgroundColor: COLOR_GREEN,
        color: COLOR_WHITE
    }
})
