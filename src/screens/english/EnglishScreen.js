import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { BaseScreen } from '../base';
import { Header } from '../../components/base';
import { TitleForm, TextForm } from '../../components/form';
import { HOME_SCREEN } from '../../constants/NavigatorConstants';
import { LearnHeader } from '../../components/learning';
import { Icon } from 'react-native-elements';

export default class EnglishScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            english: {
                "title": {
                    "en": "Essential English for IT",
                    "vn": "Essential English for IT"
                },
                "content": [
                    {
                        "en": "Hello and welcome to English 4 IT!\n\nIn this course, you will learn to understand, speak, and write the words required to function in an English speaking IT job or University study program.\n\nThe course is organized into many units covering a wide area of IT topics. To complete a unit, you need to learn the new vocabulary and then complete the activities.\n\nIn this first unit, there are only 10 vocabulary words you need to learn. The vocabulary words are normally presented in a short reading or dialogue format. Here is a really short reading as an example:",
                        "vi": "Xin chào và chào mừng bạn đến với Tiếng Anh 4 CNTT!\n\nTrong khóa học này, bạn sẽ học cách hiểu, nói và viết các từ cần thiết để thực hiện công việc CNTT nói tiếng Anh hoặc chương trình học Đại học.\n\n Khóa học được tổ chức thành nhiều khóa học. các đơn vị bao gồm một phạm vi rộng các chủ đề CNTT. Để hoàn thành một đơn vị, bạn cần học từ vựng mới và sau đó hoàn thành các hoạt động.\n\nTrong đơn vị đầu tiên này, chỉ có 10 từ vựng bạn cần học. Các từ vựng thường được trình bày dưới dạng đọc hoặc đối thoại ngắn. Đây là một bài đọc thực sự ngắn làm ví dụ:"
                    },
                    {
                        "en": "Information Technology 101\n\nGood morning students! Today I want to talk about application development. As you know, to begin you need a good computer with solid components. Having the right hardware will help you to develop quality software that works without crashing.\n\nI always follow certain rules when I build a new app:\n. The data for the application should be stored in a relational database\n. Customers should be able to buy my application on the Internet\n. The software should work without any extra peripherals\n. The program should be designed to work with or without a solid network connection.\n\nBy following these simple rules, you can write great applications that work for everyone.\n\nThe end.",
                        "vi": "Công nghệ thông tin 101\n\nSinh viên buổi sáng tốt! Hôm nay tôi muốn nói về phát triển ứng dụng. Như bạn đã biết, để bắt đầu, bạn cần một chiếc máy tính tốt với các thành phần chắc chắn. Có phần cứng phù hợp sẽ giúp bạn phát triển phần mềm chất lượng hoạt động mà không gặp sự cố.\N\nTôi luôn tuân theo các quy tắc nhất định khi tôi xây dựng một ứng dụng mới:\n. Dữ liệu cho ứng dụng nên được lưu trữ trong cơ sở dữ liệu quan hệ\n. Khách hàng sẽ có thể mua ứng dụng của tôi trên Internet\n. Phần mềm sẽ hoạt động mà không cần thêm bất kỳ thiết bị ngoại vi nào. Chương trình phải được thiết kế để hoạt động có hoặc không có kết nối mạng vững chắc.\n\nBạn tuân theo các quy tắc đơn giản này, bạn có thể viết các ứng dụng tuyệt vời phù hợp với mọi người.\n\n Kết thúc."
                    }
                ]
            }
        }
    }

    _onTranslateContent = (index) => {
        const { english } = this.state;
        this.setState({
            english: {
                ...english,
                content: english.content.map((item, i) => {
                    if (i === index)
                        return { ...item, selected: item.selected ? !item.selected : true };
                    return { ...item, selected: false };
                }
                )
            }
        })
    }

    _onGoBackHome = () => {
        this.props.navigation.navigate(HOME_SCREEN);
    }

    render() {
        const { navigation } = this.props;
        // const title = navigation.getParam('title');
        const image = navigation.getParam('image');
        const { english } = this.state;
        return (
            <BaseScreen nopadding>
                <Header
                    funcGoBack={this._onGoBackHome}
                    navigation={navigation}
                />
                <LearnHeader
                    title="English for IT"
                    text={english.title.en}
                />
                <ScrollView style={styles.wrapperStyle}>
                    <TitleForm style={styles.titleStyle}>
                        {english.title.en}
                    </TitleForm>
                    {
                        english.content.map((item, index) => {
                            return <View
                                key={index}
                                style={styles.chapperStyle}
                            >
                                <TextForm style={styles.textStyle}>{item.en}</TextForm>
                                <TouchableOpacity onPress={() => this._onTranslateContent(index)}>
                                    <Icon
                                        type="font-awesome"
                                        name="language"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <View style={[
                                    styles.translateBoxStyle,
                                    { display: english.content[index].selected ? 'flex' : 'none' }
                                ]}>
                                    <TouchableOpacity 
                                        style={styles.closeButtonStyle}
                                        onPress={() => this._onTranslateContent(index)}>
                                        <Icon
                                            type="font-awesome"
                                            name="close"
                                            size={15}
                                        />
                                    </TouchableOpacity>
                                    <TextForm style={styles.textVNStyle}>
                                        {english.content[index].vi}
                                    </TextForm>
                                </View>
                            </View>
                        })
                    }
                </ScrollView>
            </BaseScreen>
        )
    }
}

const styles = StyleSheet.create({
    wrapperStyle: {
        paddingVertical: 10
    },
    titleStyle: {
        fontWeight: '600',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    chapperStyle: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        marginBottom: 10,
        position: 'relative'
    },
    translateBoxStyle: {
        backgroundColor: '#f2f2f2',
        shadowColor: '#f3f3f3',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500
    },
    textVNStyle: {
        padding: 10
    },
    closeButtonStyle: {
       padding: 5,
       flexDirection: 'row',
       justifyContent: 'flex-end'
    }
})
