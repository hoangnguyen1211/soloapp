import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TitleForm, ButtonForm } from '../form';
import { COLOR_WHITE, COLOR_ORANGE } from '../../constants/ColorConstants';
import { Overlay, Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');
export default class QuestionOverlay extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    _onShowSuccessOverlay = () => {
        this.setState({
            isVisible: true
        })
    }

    _onHideSuccessOverlay = () => {
        this.setState({
            isVisible: false
        })
    }

    render() {
        const { onAgainQuestion, onGoToNextLesson } = this.props;  
        return (
            <Overlay
                isVisible={this.state.isVisible}
                windowBackgroundColor="rgba(0, 0, 0, .4)"
                overlayBackgroundColor={COLOR_WHITE}
                width={width * 0.9}
                height={height * 0.6}
            >
                <View style={styles.wrapperStyle}>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center', 
                        justifyContent: 'center'
                        }}>
                        <View style={styles.iconBoxStyle} >
                            <Icon
                                name='check'
                                type='font-awesome'
                                color={COLOR_ORANGE}
                                size={35}
                            />
                        </View>
                        <TitleForm>Hoàn thành!</TitleForm>
                    </View>
                    <View style={{ flex: 1 }}>
                        <ButtonForm
                            colors={['#eea849','#f46b45']}
                            funcHandler={onAgainQuestion}
                            >
                            Làm lại
                        </ButtonForm>
                        <ButtonForm 
                            funcHandler={onGoToNextLesson}>
                            Bài kế tiếp
                        </ButtonForm>
                    </View>
                </View>
            </Overlay>
        )
    }
}

const iconBoxWidth = width / 5;
const styles = StyleSheet.create({
    wrapperStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20,
        paddingTop: (height * 0.6) * 0.2
    },
    iconBoxStyle: {
        width: iconBoxWidth,
        height: iconBoxWidth,
        borderRadius: iconBoxWidth / 2,
        borderColor: COLOR_ORANGE,
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
