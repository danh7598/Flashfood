import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import DateTimePicker from '@react-native-community/datetimepicker';
import calendar from '../../assets/calendar.png';
const emptyDate = new Date(1598051730000);
const formatDate = (date) => {
    return ('0' + (date.getMonth() + 1)).slice(-2) + '/' + ('0' +
        date.getDate()).slice(-2) + '/' +
        date.getFullYear();
};
const ItemEditAccount = ({ title, textInputProps }) => {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(emptyDate);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);

    };

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{title}</Text>
            {textInputProps.kind != 'date'
                ? <TextInput
                    // placeholder={"Input name"}
                    placeholderTextColor={'#BBBDC1'}
                    style={styles.textInput}
                    {...textInputProps}
                />
                : <View style={styles.viewDate}>
                    <Text style={[styles.textDate, { color: date === emptyDate ? '#BBBDC1' : '#525C67', }]}>
                        {date == emptyDate ? 'MM/DD/YYYY' : formatDate(date)}
                    </Text>
                    <TouchableOpacity onPress={() => { setShow(true); }}>
                        <Image
                            style={styles.imgCalendar}
                            source={calendar} />
                    </TouchableOpacity>
                </View>}
            {show && <DateTimePicker
                value={date}
                mode={'date'}
                display="default"
                onChange={onChange}
            />}
        </View>
    );
};

export default ItemEditAccount;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '100%',
        //height: responsiveHeight(9.97),
        paddingTop: responsiveHeight(1.47),
        paddingHorizontal: responsiveWidth(4),
        justifyContent: 'space-between',
        //backgroundColor: 'skyblue'
    },
    textTitle: {
        fontSize: responsiveFontSize(1.83),
        fontWeight: '500',
        fontFamily: 'SVN-Gilroy-Medium',
        color: '#898B9A'
    },
    textInput: {
        flex: 1,
        marginTop: responsiveHeight(0.98),
        height: responsiveHeight(6.89),
        borderRadius: responsiveWidth(2.13),
        backgroundColor: 'white',
        color: '#525C67',
        fontSize: responsiveFontSize(1.83),
        fontWeight: '500',
        fontFamily: 'SVN-Gilroy-Medium',
        paddingHorizontal: responsiveWidth(4)
    },
    viewDate: {
        flex: 1,
        marginTop: responsiveHeight(0.98),
        height: responsiveHeight(6.89),
        borderRadius: responsiveWidth(2.13),
        backgroundColor: 'white',
        paddingHorizontal: responsiveWidth(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textDate: {
        fontSize: responsiveFontSize(1.83),
        fontWeight: '500',
        fontFamily: 'SVN-Gilroy-Medium',
    },
    imgCalendar: {
        width: responsiveWidth(4.2),
        height: responsiveWidth(4.2)
    }
});
