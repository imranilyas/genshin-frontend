import React, {useState} from 'react';
import {Switch, StyleSheet} from 'react-native';
import { Dark } from '../../styles/style';

const DarkMode = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);

        // Switching Background Images Across Screens
        Dark.darkMode = !Dark.darkMode;
        Dark.setImage();
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