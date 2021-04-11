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


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            indexCategory: 0,
            searchValue: ''
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

    render() {
        //console.log(this.state.indexCategory)
        //console.log(this.state.searchValue)
        //console.log(sizeHeight(3))
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
                        onChangeValue={this.onChangeSearchValue}/>
                    <DeliveryAddress
                        style={styles.viewDeliveryAddress}
                        textAddress={'300 Post Street San Francisco, CA'}/>
                    <ListCategory
                        indexCategory={this.state.indexCategory}
                        onPressCategory={this.onPressCategory} />
                    <ListPopular/>
                    <ListRecommended/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: sizeHeight(3)
    },
    containerScrollView: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imgHeaderBarRight: {
        width: '100%',
        height: '100%',
        borderRadius: sizeWidth(2)
    },
    viewSearchBar: {
        marginTop: sizeHeight(1),
        //backgroundColor: 'skyblue'
    },
    viewDeliveryAddress: {
        marginTop: sizeHeight(2)
    },
    
    
    
});
