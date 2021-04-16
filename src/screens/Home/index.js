import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import three_lines from '../../assets/three_lines.png';
import face_woman from '../../assets/face_woman.jpeg';
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size';
import { dataCategory, dataPopular } from '../../string/FakeData';
import { blackColor, grayColor, orangeColor } from '../../string/ColorTheme';
import SearchBar from '../../common/SearchBar';
import DeliveryAddress from './DeliveryAddress';
import HeaderList from './HeaderList';
import ListCategory from './ListCategory';
import ItemRecommended from './ListRecommended';
import ListPopular from './ListPopular';
import ListRecommended from './ListRecommended';
import ListMenu from './ListMenu';
import { getCategoryItems, getPopularItems, getRecommendedItems } from '../../Utils/api';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCategory: [],
            dataPopular: [],
            dataRecommended: [],
            indexCategory: 0,
            indexMenu: 0,
            searchValue: '',
            loading: true,
            
        };
    }

    onChangeSearchValue = (text) => {
        this.setState({ searchValue: text });
    };

    onPressFilter = () => {
        alert('Press Filter');
    };

    onPressCategory = (index) => () => {
        this.setState({ indexCategory: index });
    };

    onPressDrawer = () => {
        alert('Press Drawer');
    };

    onSelectedMenu = (index) => () => {
        this.setState({ indexMenu: index });
    };

    handleUpdateCategory = () => {
        this.setState({ loading: true }, async () => {
            try {
                const categories = await getCategoryItems();
                this.setState({
                    loading: false,
                    dataCategory: categories
                });
            } catch (e) {
                this.setState({
                    loading: false,
                });
                console.log("Error: ", e);
            }
        });
    };

    handleUpdatePopularItems = () => {
        this.setState({ loading: true }, async () => {
            try {
                const popular = await getPopularItems();
                this.setState({
                    loading: false,
                    dataPopular: popular
                });
            } catch (e) {
                this.setState({
                    loading: false,
                });
                console.log("Error: ", e);
            }
        });
    };

    handleUpdateRecommendedItems = () => {
        this.setState({ loading: true }, async () => {
            try {
                const popular = await getRecommendedItems();
                this.setState({
                    loading: false,
                    dataRecommended: popular
                });
            } catch (e) {
                this.setState({
                    loading: false,
                });
                console.log("Error: ", e);
            }
        });
    };

    componentDidMount() {
        this.handleUpdateCategory();
        this.handleUpdatePopularItems();
        this.handleUpdateRecommendedItems();
    }

    render() {
        //console.log(this.state.indexCategory)
        //console.log(this.state.searchValue)
        //console.log(sizeHeight(3))
        //console.log(this.state.dataPopular)
        return (
            <View style={styles.container}>
                <HeaderBar
                    title={'HOME'}
                    rightBtn
                    onPressLeftBtn={this.onPressDrawer}
                    styleRightBtn={styles.imgHeaderBarRight}
                    rightBtnSource={face_woman}
                    leftBtnSource={three_lines} />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.containerScrollView}>
                    <SearchBar
                        style={styles.viewSearchBar}
                        onPressFilter={this.onPressFilter}
                        value={this.state.searchValue}
                        onChangeValue={this.onChangeSearchValue} />
                    <DeliveryAddress
                        style={styles.viewDeliveryAddress}
                        textAddress={'300 Post Street San Francisco, CA'} />
                    <ListCategory
                        data={this.state.dataCategory}
                        indexCategory={this.state.indexCategory}
                        onPressCategory={this.onPressCategory} />
                    <ListPopular
                        data={this.state.dataPopular}
                    />
                    <ListRecommended
                        data={this.state.dataRecommended}/>
                    <ListMenu
                        onSelected={this.onSelectedMenu}
                        itemSelected={this.state.indexMenu} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: sizeHeight(1)
    },
    containerScrollView: {
        //alignItems: 'center',
        //justifyContent: 'space-between'
    },
    imgHeaderBarRight: {
        width: '100%',
        height: '100%',
        borderRadius: sizeWidth(2)
    },
    viewSearchBar: {
        marginTop: sizeHeight(1),
        marginLeft: sizeWidth(4)
        //backgroundColor: 'skyblue'
    },
    viewDeliveryAddress: {
        marginTop: sizeHeight(2),
        marginLeft: sizeWidth(4)
    },



});
