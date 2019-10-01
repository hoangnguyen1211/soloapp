import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { BaseScreen } from '../base';
import { Header } from '../../components/base';
import { TopicCourseItem, CategoryItem } from '../../components/home';
import { TextForm } from '../../components/form';
import { COURSE_SCREEN } from '../../constants/NavigatorConstants';
import { FONT_MD } from '../../constants/FontConstants';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            jobcourses: []
        }
    }

    componentDidMount = () => {
        this.setState({
            topics: [
                {
                    "id": "1",
                    "name": "Frontend",
                    "color": ["#91eae4", "#86a8e7", "#7f7fd5"],
                    "icon": require('../../assets/icons/logo-html5.svg')
                },
                {
                    "id": "2",
                    "name": "Backend",
                    "color": ["#a8c0ff", "#3f2b96"],
                    "icon": require('../../assets/icons/logo-html5.svg')
                },
                {
                    "id": "3",
                    "name": "Mobile",
                    "color": ["#f5af19", "#f12711"],
                    "icon": require('../../assets/icons/logo-html5.svg')
                },
                {
                    "id": "4",
                    "name": "English for IT",
                    "color": ["#eaafc8", "#654ea3"],
                    "icon": require('../../assets/icons/logo-html5.svg')
                },
                {
                    "id": "5",
                    "name": "Thuật toán",
                    "color": ["#F27121", "#E94057", "#8A2387"],
                    "icon": require('../../assets/icons/logo-html5.svg')
                },
                {
                    "id": "6",
                    "name": "Phỏng vấn",
                    "color": ["#FDC830", "#F37335"],
                    "icon": require('../../assets/icons/logo-html5.svg')
                }
            ],
            categories: [
                {
                    "id": "1",
                    "name": "Frontend",
                    "image": "http://www.yagangroup.com.tr/wp-content/uploads/2015/11/web-yazilim-devlet-tesvik.jpg"
                },
                {
                    "id": "2",
                    "name": "Backend",
                    "image": "https://i.udemycdn.com/course/750x422/23742_3580_8.jpg"
                },
                {
                    "id": "3",
                    "name": "Mobile",
                    "image": "http://www.trackotalent.com/img/skills/mobile-app.png"
                },
                {
                    "id": "4",
                    "name": "English for IT",
                    "image": "https://www.erasmusplus.org.il/sites/erasmus2/UserContent/images/ENGLISH%20IMG.jpg"
                },
                {
                    "id": "5",
                    "name": "Thuật toán",
                    "image": "https://i0.wp.com/vbusiness.org/wp-content/uploads/2019/02/thuat-toan-hoc-tap-amazon.png?resize=696%2C431&ssl=1"
                },
                {
                    "id": "6",
                    "name": "Phỏng vấn",
                    "image": "https://chefjob.vn/images/tin-tuc/ung-vien/nhieu-ung-vien-lot-va-mat-xanh-nha-tuyen-dung-nho-gioi-thieu-ban-than-an-tuong.jpg"
                }
            ]
        })
    }

    _onGoToCourseScreen = (topicId, title) => {
        this.props.navigation.navigate(COURSE_SCREEN, {
            title,
            topicId
        });
    }

    render() {
        const { navigation } = this.props;
        const { topics, categories } = this.state;
        return (
            <BaseScreen style={styles.containerStyle} nopadding>
                <Header title="Trang chủ" />
                <ScrollView>
                    <View style={styles.wrapperStyle}>
                        <View>
                            <TextForm style={styles.titleStyle}>Lộ trình học</TextForm>
                            <FlatList
                                data={topics}
                                renderItem={({ item, index }) =>
                                    <TopicCourseItem
                                        id={item.id}
                                        title={item.name}
                                        index={index}
                                        color={item.color}
                                        funcGoToCourseScreen={this._onGoToCourseScreen}
                                    />
                                }
                                keyExtractor={(item, index) => index.toString()}
                                numColumns={2}
                                scrollEnabled={false}
                            />
                        </View>
                        <View style={{marginTop: 20}}>
                            <FlatList
                                data={categories}
                                renderItem={({ item, index }) =>
                                    <CategoryItem
                                        category={item}
                                        index={index}
                                        navigation={navigation}
                                    />
                                }
                                keyExtractor={(item, index) => index.toString()}
                                numColumns={1}
                            />
                        </View>
                    </View>
                </ScrollView>
            </BaseScreen>
        )
    }
}

const styles = StyleSheet.create({
    wrapperStyle: {
        paddingHorizontal: 5,
    },
    titleStyle: {
        fontWeight: '600',
        paddingHorizontal: 7,
        marginVertical: 15,
        marginBottom: 10,
        fontSize: FONT_MD
    }
})