import react from "react";
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from 'react-native-reanimated-carousel';
import { RFValue } from "react-native-responsive-fontsize";
import { scale, verticalScale } from "react-native-size-matters";
import { Colors, Fonts } from "../../../commonFiles/typography";

const Cart = ({ setTotalAmount }) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const data = [
        { name: 'FRIES', price: 4, IMAGE: require('../../../assets/images/item3.png'), width: '200', height: '200' },
        { name: 'LATTE', price: 3, IMAGE: require('../../../assets/images/item2.png'), width: '218', height: '230' },
        { name: 'BURGER', price: 6, IMAGE: require('../../../assets/images/item1.png'), width: '170', height: '230' },
    ]

    const RenderSingleItem = ({ item }) => {
        const { IMAGE, name, price, height, width } = item
        return (
            <View style={styles.itemContainer}>
                <Image source={IMAGE} style={{ width: scale(width), height: verticalScale(height), resizeMode: 'cover' }} />

                <View style={{ marginTop: verticalScale(32) }}>
                    <Text style={styles.itemName}>{name}</Text>
                    <Text style={styles.itemPrice}>{price}$</Text>

                    <TouchableOpacity onPress={() => setTotalAmount(price)}>
                        <Image source={require("../../../assets/images/addIcon.png")} style={styles.addIcon} />
                    </TouchableOpacity>

                </View>
            </View>
        )

    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={height}
                data={data}
                scrollAnimationDuration={1000}
                snapEnabled={true}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item }) => (
                    <RenderSingleItem item={item} />
                )}
            />
        </GestureHandlerRootView>

    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
    },
    itemName: {
        fontFamily: Fonts.pingFans,
        color: Colors.pink,
        fontSize: RFValue(32),
        fontWeight: '600',
        textAlign: 'right'
    },
    itemPrice: {
        fontFamily: Fonts.pingFans,
        color: Colors.pink,
        fontSize: RFValue(24),
        fontWeight: '600',
        textAlign: 'right'
    },
    addIcon: {
        width: scale(59),
        height: scale(59),
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        marginTop: verticalScale(24)
    }
})


export { Cart }