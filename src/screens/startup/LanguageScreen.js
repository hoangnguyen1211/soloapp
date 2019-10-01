import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { BaseScreen } from '../base';
import { TextForm, TitleForm } from '../../components/form';
import { LanguageButton } from '../../components/startup';
import { SIGN_IN_SCREEN } from '../../constants/NavigatorConstants';

export default class LanguageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languges: []
        }
    }

    componentDidMount = () => {
        this.setState({
            languges: [
                { id: 'vi', name: 'Vietnamese' },
                { id: 'en', name: 'English' },
                { id: 'jp', name: 'Japanese' }
            ]
        })
    }

    _onSelectedLanguage = languge => {
        this.props.navigation.navigate(SIGN_IN_SCREEN);
    }

    render() {
        const { languges } = this.state;
        return (
            <BaseScreen style={ styles.containerStyle }>
                <View>
                    <TitleForm center style={ styles.titleStyle }>
                        Display language
                    </TitleForm>
                    <TextForm center style={ styles.textStyle }>
                        Selecting the right language for you will help the application display exactly what you need.
                    </TextForm>
                    <FlatList
                        data={languges}
                        renderItem={({ item, index }) =>
                            <LanguageButton
                                languge={item}
                                funcHandler={this._onSelectedLanguage}
                            >
                                {item.name}
                            </LanguageButton>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </BaseScreen>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    titleStyle: {
        marginBottom: 20
    },
    textStyle: {
        marginBottom: 20
    }
})
