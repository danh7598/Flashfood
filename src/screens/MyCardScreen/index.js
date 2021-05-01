import React, { useState } from 'react';
import { FlatList, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import back from '../../assets/back.png';
import ItemCard from './ItemCard';
import { dataCard } from './dataCard';
import { sizeHeight, sizeWidth } from '../../Utils/Size';
import { blackColor } from '../../string/ColorTheme';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Button from '../LoginScreen/Button';

const MyCardScreen = ({ navigation }) => {
    const [cardSelected, setCardSelected] = useState(0);
    return (
        <View style={styles.container}>
            <HeaderBar
                title={'MY CARDS'}
                onPressLeftBtn={() => {
                    navigation.goBack();
                }}
                leftBtnSource={back} />
            <SectionList
                showsVerticalScrollIndicator={false}
                sections={dataCard}
                contentContainerStyle={styles.viewList}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderSectionHeader={({ section: { title } }) => {
                    if (title !== '')
                        return (
                            <View style={styles.headerComponent}>
                                <Text style={styles.textHeader}>{title}</Text>
                            </View>
                        );
                }}
                ListFooterComponent={
                    <Button
                        style={styles.buttonAdd}
                        buttonSign={"Add"}
                    />}
                renderItem={({ item, index, section }) => {
                    return (
                        <ItemCard
                            {...item}
                            onSelect={() => {
                                section.data.forEach((item, indexItem) => {
                                    if (indexItem === index) {
                                        item.isSelected = true;
                                    } else {
                                        item.isSelected = false;
                                    }
                                    setCardSelected(cardSelected + 1);
                                });
                            }}
                        />
                    );
                }}
            />
        </View>
    );
};

export default MyCardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollViewStyle: {
        flexGrow: 1,
        flexDirection: 'column',
        // alignItems: 'stretch'
    },
    viewList: {
        marginTop: sizeHeight(1.97),
        paddingBottom: sizeHeight(3.94),
        // flexGrow: 1,
        // flexWrap: 'wrap'
        // marginBottom: sizeHeight(2.95)
        // backgroundColor: 'skyblue',
    },
    separator: {
        height: sizeHeight(1.97),
        // backgroundColor: 'cornsilk'
    },
    textHeader: {
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        color: blackColor,
        fontSize: responsiveFontSize(2.09),
        marginBottom: sizeHeight(1.97),

    },
    headerComponent: {
        marginTop: sizeHeight(2.95),
        marginHorizontal: sizeWidth(4),
    },
    viewListAddCard: {
        // backgroundColor: 'skyblue'
    },
    buttonAdd: {
        // position: 'absolute',
        marginTop: sizeHeight(3.94),
        // marginBottom: sizeHeight(3.94),
    },
});
