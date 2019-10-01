import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { BaseScreen } from '../base';
import { DiscussHeader, DiscussItem } from '../../components/discuss';
import { QuestionButton } from '../../components/question'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/DiscussActions';

class DiscussScreen extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        this.props.getAllDiscuss();
    }

    _onGoToDiscussDtailsScreen = (discuss) => {
        this.props.navigation.navigate('DiscussDetailsScreen', {
            discuss
        })
    }

    _onGoToDiscussQuestionScreen = () => {
        this.props.navigation.navigate('DiscussQuestionScreen');
    }

    render() {
        const { discusses, totalDiscuss } = this.props;
        return (
            <BaseScreen nopadding>
                <DiscussHeader 
                    title="Thảo luận" 
                    searchVisible
                />
                <View style={ styles.wrapper }>
                    <FlatList 
                        data={discusses}
                        renderItem={ ({item, index}) => 
                            <DiscussItem 
                                discuss={item}
                                funcHandler={this._onGoToDiscussDtailsScreen}
                             /> 
                        }
                        keyExtractor={ (item, index) => index.toString() }
                    />
                </View>
                <QuestionButton
                    style={{ bottom: 50 }}
                    name="plus"
                    funcHandler={this._onGoToDiscussQuestionScreen}
                 />
            </BaseScreen>
        )
    }
}

function mapState(state) {
    return { 
        discusses: state.discussReducer.discusses,
        totalDiscuss: state.discussReducer.totalDiscuss
    }
}

function mapDispatch(dispatch) {
    return {
        getAllDiscuss() {
            dispatch(actions.getAllDiscuss())
        }
    }
}

export default connect(mapState, mapDispatch)(DiscussScreen);

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 10,
        paddingVertical: 20
    }
})