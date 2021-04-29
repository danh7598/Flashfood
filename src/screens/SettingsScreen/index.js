import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../../common/HeaderBar';
import back from '../../assets/back.png';
import ItemSettings from './ItemSettings';
import { sizeHeight, sizeWidth } from '../../Utils/Size';
import data from './dataSetting';
const SettingsScreen = ({ navigation }) => {
    const onPressBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <HeaderBar
                title={'SETTTINGS'}
                onPressLeftBtn={onPressBack}
                leftBtnSource={back} />
            <FlatList
                style={styles.listSettings}
                ListFooterComponent={<View style={styles.footerComponent} />}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <ItemSettings
                            onPress={() => { navigation.navigate(item.routeName); }}
                            imageSource={item.imageSource}
                            title={item.title} />
                    );
                }}
            />

        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    listSettings: {
        marginHorizontal: sizeWidth(4),
        marginBottom: sizeHeight(3.94),
        marginTop: sizeHeight(3.94),
        backgroundColor: '#FBFBFB',
        borderRadius: sizeWidth(4.2)
    },
    footerComponent: {
        // marginBottom: sizeHeight(1.97)
    },
    separator: {
        width: sizeWidth(78.6),
        height: 1,
        backgroundColor: '#DDDDDD',
        alignSelf: 'center'
    }
});
