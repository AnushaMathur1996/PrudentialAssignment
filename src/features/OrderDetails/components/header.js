import React from "react";
import { View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { scale, verticalScale } from "react-native-size-matters";
import ICON1 from "../../../assets/images/icon1.svg"
import ICON2 from "../../../assets/images/icon2.svg"
import ICON3 from "../../../assets/images/icon3.svg"
import ICON4 from "../../../assets/images/icon4.svg"

const TopTabs = () => {
    return (
        <LinearGradient
            colors={['#FF5D79', '#FD003C',]}
            style={styles.header}>
     
            <ICON3 style={styles.innerContainer}/>
            <ICON1 style={styles.innerContainer}/>
            <ICON4 style={styles.innerContainer}/>
            <ICON2 style={styles.innerContainer}/>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    header: {
        height: verticalScale(70),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',        
    },
    innerContainer:{
        marginHorizontal:scale(32)
    }

})

export { TopTabs }