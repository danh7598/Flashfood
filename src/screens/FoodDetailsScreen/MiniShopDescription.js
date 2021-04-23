import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { orangeColor } from '../../string/ColorTheme'
import { sizeFont, sizeHeight, sizeWidth } from '../../Utils/Size'
import FiveStarRate from './FiveStarRate'
import logo_restaurant from '../../assets/logo_restaurant.png';
import PropTypes from 'prop-types'
const MiniShopDescription = ({ avatar, nameShop, distance, rateNumber }) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewShop}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.avatarShop}>
                        <Image
                            style={styles.imgLogo}
                            source={avatar} />
                    </View>
                    <View style={styles.viewNameShop}>
                        <Text style={styles.textNameShop}>
                            {nameShop}
                        </Text>
                        <Text style={styles.textDistance}>
                            {distance} from you
                        </Text>
                    </View>
                </View>
                <FiveStarRate
                    spaceSize={4}
                    size={5}
                    numberRate={rateNumber} />
            </View>
        </View>
    )
}

MiniShopDescription.propTypes = {
    avatarShop: PropTypes.node,
    distance: PropTypes.string,
    name: PropTypes.string,
    rateNumber: PropTypes.number,
}

MiniShopDescription.defaultProps = {
    avatar: logo_restaurant,
    name: 'Totoya Food',
    distance: '1.2 Km',
    rateNumber: 5,
}

export default MiniShopDescription

const styles = StyleSheet.create({
    container: {
        height: sizeHeight(10),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'rgba(137,139,154,0.1)',
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewShop: {
        flexDirection: 'row',
        paddingHorizontal: sizeWidth(4),
        width: sizeWidth(100),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatarShop: {
        width: sizeWidth(12),
        height: sizeWidth(12),
        borderRadius: sizeWidth(3),
        backgroundColor: orangeColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgLogo: {
        width: sizeWidth(8),
        height: sizeWidth(8)
    },
    textNameShop: {
        fontFamily: 'SVN-Gilroy-Bold',
        fontSize: sizeFont(4),
    },
    viewNameShop: {
        marginLeft: sizeWidth(4)
    },
    textDistance: {
        color: '#898B9A',
        fontFamily: 'SVN-Gilroy-Regular',
        fontSize: sizeFont(4)
    },
    
})
