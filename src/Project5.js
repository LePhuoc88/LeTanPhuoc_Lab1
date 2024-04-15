import React from "react";
import { View, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    box: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
});

const Square = ({text, gbColor = "#7ce0f9"}) => (
    <View style = {[style.box, {backgroundColor: gbColor}]}>
        <Text>{text}</Text>
    </View>
);

export default () => {
    return(
        <View style={style.container}>
            <Square text="Square 1"/>
            <Square text="Square 2" gbColor="#4dc2c2"/>
            <Square text="Square 3" gbColor="#ff637c"/>

        </View>
    )
}