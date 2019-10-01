import React, { Component, Fragment, createRef } from 'react';
import { StyleSheet } from 'react-native';
import QuestionButton from './QuestionButton';
import QuestionSuccess from './QuestionSuccess';
import QuestionError from './QuestionError';

export default class QuestionFooter extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonVisible: false
        }
        this.sucessComponent = createRef();
        this.errorComponent = createRef();
    }

    _showQuestionNotify = (status) => {
        if(status){
            this.sucessComponent.current._showSuccessNotify();
        }
        else{
            this.errorComponent.current._showErrorNotify();
        }
    }

    _toggleCheckedButton = (status) => {
        this.setState({
            buttonVisible: status
        });
    }

    render(){
        const {
            checkedAnswerHandler, 
            goToQuestionScreen,
            randomQuiz
        } = this.props;
        const { buttonVisible } = this.state;
        return (
            <Fragment>
                <QuestionButton
                    name="check" 
                    style={[ 
                        styles.buttonStyle,
                        { display: buttonVisible ? 'flex' : 'none' } 
                    ]}
                    funcHandler={checkedAnswerHandler}
                />
                <QuestionSuccess
                    ref={this.sucessComponent}
                    goToQuestionScreen={goToQuestionScreen}
                />

                <QuestionError
                    ref={this.errorComponent}
                    randomQuiz={randomQuiz}
                />
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        position: 'absolute',
        bottom: 10,
        left: 20
    }
})
