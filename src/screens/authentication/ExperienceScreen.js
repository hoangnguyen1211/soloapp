import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextForm, InputForm, ButtonForm } from '../../components/form';
import { FONT_XS } from '../../constants/FontConstants';
import { BaseScreen } from '../base';
import { HOME_SCREEN } from '../../constants/NavigatorConstants';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/SignUpActions';

class ExperienceScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: '',
            experience: ''
        }
    }

    componentDidMount = () => {
        const jobId = this.props.navigation.getParam('jobId');
        switch (jobId) {
            case 'sv':
                this.setState({ question: 'Bạn đang là sinh viên năm mấy?' });
                break;
            case 'tn':
                this.setState({ question: 'Bạn đang làm trong lĩnh vực nào?' });
                break;
            case 'it':
                this.setState({ question: 'Bạn đã có bao nhiêu năm kinh nghiệm?' });
                break;
            default:
                break;
        }
    }

    _onChangeInputHandler = (name, text) => {
        this.setState({ experience: text });
    }

    _onSubmitGetCodeHandler = () => {
        const { experience } = this.state;
        const { info, _setInfoSignUp } = this.props;
        if (experience.length === 0)
            Alert.alert('Vui lòng nhập thông tin!');
        else {
            const obj = {
                ...info,
                experience: experience
            }
            _setInfoSignUp(obj);
            this.props.navigation.navigate(HOME_SCREEN);
        }
    }

    render() {
        const { question } = this.state;
        return (
            <BaseScreen style={styles.containerStyle} >
                <View>
                    <TextForm center style={styles.titleStyle} >
                        { question }
                    </TextForm>
                    <InputForm
                        center
                        name="experience"
                        placeholder="Nội dung"
                        funcHandler={this._onChangeInputHandler}
                    />
                    <TextForm center style={styles.noteStyle}>
                        Lưu ý: Vui lòng nhập đúng để ứng dụng hiển thị nội dung phù hợp nhất với bạn. 
                    </TextForm>
                    <ButtonForm funcHandler={this._onSubmitGetCodeHandler}>
                        Hoàn tất
                    </ButtonForm>
                </View>
            </BaseScreen>
        )
    }
}

const mapState = (state) => {
    return { info: state.signUpReducer.info }
}

// Maps `dispatch` to `props`:
const mapDispatch = (dispatch) => {
    return {
        _setInfoSignUp: (info) => {
            dispatch(actions.setInfoSignUp(info));
        }
    }
}

export default connect(mapState, mapDispatch)(ExperienceScreen);

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    titleStyle: {
        fontWeight: '600',
        marginBottom: 30
    },
    noteStyle: {
        fontSize: FONT_XS,
        paddingHorizontal: '10%',
        marginBottom: 20
    }
})
