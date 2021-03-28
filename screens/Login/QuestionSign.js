import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default class QuestionSign extends Component {
    render() {
        return (
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ fontSize: 16, color: "#525C67" }}>
                    {this.props.questionSign}
                </Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 16, color: "#F96B44" }}>
                        {this.props.alternativeButtonSign}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})