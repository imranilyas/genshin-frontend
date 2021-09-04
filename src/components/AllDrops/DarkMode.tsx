import React, {useState} from 'react';
import {Switch, StyleSheet} from 'react-native';

const DarkMode = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }

    return (
        <Switch
            trackColor={{ false: "#767577", true: "#C8C8C8" }}
            thumbColor={isEnabled ? "#252525" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style = {styles.switch}
        />
    )
}

const styles = StyleSheet.create({
    switch: {
        alignSelf: 'flex-end',
        marginTop: '12%',
        marginRight: '5%',
        marginBottom: '-12%',
    },
})

export default DarkMode;