import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { BaseScreen } from '../base';
import { DiscussHeader, DiscussComment, DiscussInput } from '../../components/discuss';
import { FONT_SM, FONT_MD } from '../../constants/FontConstants';
import { COLOR_GRAY } from '../../constants/ColorConstants';
import { Icon } from 'react-native-elements';
import UserIcon from '../../assets/icons/user_64.png';

const { width, height } = Dimensions.get('window');
export default class DiscussDetailsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            discuss: {},
            content: '',
            height: 50
        }
    }

    componentDidMount = () => {
        this.setState({
            discuss: this.props.navigation.getParam('discuss')
        })
    }

    _onGoBackScreen = () => {
        this.props.navigation.goBack();
    }

    _renderInfoItem = (iconName, text) => {
        return <View style={styles.infoItemStyle}>
            <Icon
                name={iconName}
                type='ionicon'
                color='#517fa4'
                size={12}
            />
            <Text style={styles.infoItemTextStyle}>{text}</Text>
        </View>
    }

    _renderQuestion = (fullname, title, content) => {
        return <Fragment>
            <View style={styles.questionStyle}>
                <View style={styles.questionImageStyle}>
                    <Image style={styles.avatarStyle} source={UserIcon} />
                </View>
                <View style={styles.questionInfoStyle}>
                    <Text style={styles.fulnameStyle}>{fullname}</Text>
                    <Text style={styles.quizStyle}>{title}</Text>
                </View>
            </View>
            <Text style={styles.questionContentStyle}>
                {content}
            </Text>
        </Fragment>
    }

    render() {
        const { discuss } = this.state;
        return (
            <BaseScreen nopadding>
                <View style={styles.wrapperStyle}>
                    <DiscussHeader
                        title="Thảo luận"
                        funcGoBack={this._onGoBackScreen}
                    />
                    <View style={styles.questionWrapperStyle}>
                        {this._renderQuestion(discuss.fullname, discuss.title, discuss.content)}
                        <View style={styles.infoStyle}>
                            {this._renderInfoItem('ios-list-box', discuss.datetime)}
                            {this._renderInfoItem('ios-eye', discuss.views)}
                        </View>
                    </View>
                    <Text style={styles.answerHeaderStyle}>
                        {discuss.comments ? discuss.comments.length : 0} phản hồi
                    </Text>
                    <FlatList
                        data={discuss.comments}
                        renderItem={({ item, index }) =>
                            <DiscussComment
                                comment={item}
                            />
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <DiscussInput />
            </BaseScreen>
        )
    }
}

const styles = StyleSheet.create({
    wrapperStyle: {
        height: height,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 70
    },
    questionWrapperStyle: {
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    questionStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    questionImageStyle: {
        width: width / 10,
        height: width / 10,
        borderRadius: width / 20,
        borderColor: '#808080',
        borderWidth: 2,
        padding: 2
    },
    avatarStyle: {
        width: '100%',
        height: '100%',
        borderRadius: width / 20
    },
    questionInfoStyle: {
        paddingHorizontal: 10
    },
    fulnameStyle: {
        fontSize: FONT_MD,
        fontWeight: '600',
        color: '#000',
        marginBottom: 5
    },
    quizStyle: {
        fontSize: FONT_SM,
        fontWeight: '600',
        color: COLOR_GRAY
    },
    questionContentStyle: {
        padding: 10,
        fontSize: FONT_SM
    },
    answerHeaderStyle: {
        padding: 15,
        backgroundColor: '#f2f2f2',
        textTransform: 'uppercase'
    },
    infoStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    infoItemStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    infoItemTextStyle: {
        fontSize: 11,
        marginLeft: 5
    }
})