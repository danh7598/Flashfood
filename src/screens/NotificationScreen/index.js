import React, { useState } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import back from '../../assets/back.png';
import ItemNotification from './ItemNotification';
import { dataNotification } from '../../string/FakeData';
import { blackColor, orangeColor } from '../../string/ColorTheme';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import CheckBox from '@react-native-community/checkbox';
import { sizeHeight, sizeWidth } from '../../Utils/Size';


const convertDateToString = (date) => {
    if (date instanceof Date) {
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = date.getFullYear();
        return date = mm + '-' + dd + '-' + yyyy;
    }
};
const NotificationScreen = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);


    return (
        <View style={styles.container}>
            <HeaderBar
                title={'NOTIFICATIONS'}
                onPressLeftBtn={() => {
                    navigation.goBack();
                }}
                leftBtnSource={back} />
            <SectionList
                sections={dataNotification}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={<View style={styles.footerComponent} />}
                style={styles.viewList}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item, index }) => {
                    return (
                        <ItemNotification
                            title={item.title}
                            description={item.description}
                            status={item.status}
                            shipper={item.shipper}
                            time={item.time}
                            imageSource={item.imageSource}
                        />
                    );
                }}
                renderSectionHeader={({ section }) => {
                    const index = dataNotification.indexOf(section); //Lấy index của header
                    let today = new Date();
                    let yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    let text = section.time === convertDateToString(today)
                        ? "Today" : section.time === convertDateToString(yesterday)
                            ? "Yesterday" : section.time;
                    if (index === 0) {
                        return (
                            <View style={styles.viewHeader}>
                                <Text style={styles.textHeader}>{text}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <CheckBox
                                        tintColors={{ true: orangeColor, false: blackColor }}
                                        disabled={false}
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                    <Text style={styles.textHeader}>All Marks as read</Text>
                                </View>
                            </View>
                        );
                    } else {
                        return (
                            <View style={[styles.viewHeader, { marginTop: sizeHeight(2) }]}>
                                <Text style={styles.textHeader}>{text}</Text>
                            </View>
                        );
                    }

                }}
            />
        </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewList: {
        marginHorizontal: sizeWidth(4),
        marginTop: sizeHeight(1.97)
    },
    viewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'tomato',
        height: sizeHeight(4),
        marginBottom: sizeHeight(1.97)
    },
    separator: {
        height: sizeHeight(1.97)
    },
    textHeader: {
        fontFamily: 'SVN-Gilroy-SemiBold',
        fontWeight: '600',
        color: blackColor,
        fontSize: responsiveFontSize(1.83) //14px
    },
    footerComponent: {
        height: sizeHeight(2.95)
    }
});
