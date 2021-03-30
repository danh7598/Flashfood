import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { sizeFont, sizeHeight, sizeWidth } from "../../Utils/Size";
import ButtonWithoutImage from './ButtonWithoutImage'
import QuestionSign from './QuestionSign'

export default class ButtonSignAndSocial extends Component {
    render() {
        return (
            <View style={styles.buttonContainer}>
                <View>
                    <ButtonWithoutImage buttonSign={this.props.buttonSign} />
                    <QuestionSign
                        alternativeButtonSign={this.props.alternativeButtonSign}
                        questionSign={this.props.questionSign} />
                </View>
                <View style={styles.viewSocialButton}>
                    <TouchableOpacity
                        style={[
                            styles.socialLoginButton,
                            { backgroundColor: "#0064C0" },
                        ]}
                        onPress={this.props.onPressGoogle}>
                        <Image
                            style={styles.imgSocial}
                            source={require("../../assets/facebook.png")}
                        />
                        <Text style={{ fontSize: sizeFont(4), color: "white" }}>
                            Continue With Facebook
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.socialLoginButton,
                            { marginTop: sizeWidth(4), backgroundColor: "#F5F5F8" },
                        ]}
                        onPress={this.props.onPressGoogle} >
                        <Image
                            style={styles.imgSocial}
                            source={require("../../assets/google.png")}
                        />
                        <Text style={{ fontSize: sizeFont(4), color: "#111A2C" }}>
                            Continue With Google
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'space-between',
        //backgroundColor: 'skyblue'
        //alignItems: 'center'
    },
    viewSocialButton: {
        paddingHorizontal: sizeWidth(4),
        //backgroundColor: 'cornsilk',
        //alignItems: 'center',
        marginBottom: sizeWidth(8)

    },
    socialLoginButton: {
        height: sizeHeight(7),
        borderRadius: 8,
        backgroundColor: "#F96B44",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    imgSocial: {
        width: sizeWidth(4),
        height: sizeWidth(4),
        marginRight: sizeWidth(2),
    }
});
