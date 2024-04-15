import React, { useState } from "react";
import { Text, Button, View } from "react-native";

export default () => {
    const [pressCount, setPressCount] = useState(0);

    return (
        <View style={{ alignItems: "center", marginTop: 20, flex: 1 }}>
            <Text>Hello: {pressCount} time(s)</Text>
            <Button title={`pressed ${pressCount} time(s)`} onPress={() => setPressCount(pressCount + 1)} />
        </View>
    );
};
