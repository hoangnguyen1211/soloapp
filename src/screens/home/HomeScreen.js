import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { BaseScreen } from '../base';
import { Header } from '../../components/base';
import { TopicCourseItem, CategoryItem, HomeCarousel } from '../../components/home';
import { TextForm } from '../../components/form';
import { COURSE_SCREEN } from '../../constants/NavigatorConstants';
import { FONT_MD } from '../../constants/FontConstants';
import { connect } from 'react-redux';
import * as categoryActions from '../../redux/actions/CategoryActions';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getAllCategory();
    }

    _onGoToCourseScreen = (topicId, title, image) => {
        this.props.navigation.navigate(COURSE_SCREEN, {
            title,
            topicId,
            image
        });
    }

    render() {
        const { navigation } = this.props;
        const { topics, categories } = this.props;
        return (
            <BaseScreen style={styles.containerStyle} nopadding>
                <Header
                    title="Trang chủ"
                    navigation={navigation}
                />
                <ScrollView>
                    <HomeCarousel />
                    <View style={styles.wrapperStyle}>
                        <View>
                            <TextForm style={styles.titleStyle}>Lộ trình học</TextForm>
                            <FlatList
                                data={topics}
                                renderItem={({ item, index }) =>
                                    <TopicCourseItem
                                        topic={item}
                                        index={index}
                                        funcGoToCourseScreen={this._onGoToCourseScreen}
                                    />
                                }
                                keyExtractor={(item, index) => index.toString()}
                                numColumns={2}
                                scrollEnabled={false}
                            />
                        </View>
                        <View style={{ marginTop: 20 }}>
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

function mapState(state) {
    const { categoryReducer } = state;
    return {
        topics: categoryReducer.topics,
        categories: categoryReducer.categories
    }
}

function mapDispatch(dispatch) {
    return {
        getAllCategory() {
            dispatch(categoryActions.getAllCategory());
        }
    }
}

export default connect(mapState, mapDispatch)(HomeScreen);

const styles = StyleSheet.create({
    wrapperStyle: {
    },
    titleStyle: {
        fontWeight: '600',
        paddingHorizontal: 7,
        marginVertical: 15,
        marginBottom: 10,
        fontSize: FONT_MD
    }
})