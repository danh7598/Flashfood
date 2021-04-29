import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import back from '../../../assets/back.png';
import HeaderBar from '../../../common/HeaderBar';
import ItemSwitchSetting from '../ItemSwitchSetting';
import notification from '../../../assets/icon-setting/Notifications.png';
import { sizeHeight } from '../../../Utils/Size';
const data = [
    {
        title: 'Notifications',
        description: 'You will receive daily updates',
        switchValue: true,
        imageSource: notification
    },
    {
        title: 'Promotional Notifications',
        description: 'You will receive daily updates',
        switchValue: false,
        imageSource: notification
    },
];

const NotificationSettingScreen = ({ navigation }) => {
    // const [switchValue, setSwitchValue] = useState(0);
    return (
        <View style={styles.container}>
            <HeaderBar
                title={'NOTIFICATIONS'}
                onPressLeftBtn={() => {
                    navigation.goBack();
                }}
                leftBtnSource={back} />
            <FlatList
                data={data}
                style={styles.viewList}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item, index }) => {
                    return (
                        <ItemSwitchSetting
                            title={item.title}
                            description={item.description}
                            switchValue={item.switchValue}
                            imageSource={item.imageSource} />
                    );
                }}
            />
        </View>
    );
};

export default NotificationSettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    separator: {
        height: sizeHeight(1.97)
    },
    viewList: {
        marginTop: sizeHeight(3.94)
    }
});
