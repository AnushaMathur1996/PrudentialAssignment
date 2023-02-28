import react, { useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { scale, verticalScale, } from 'react-native-size-matters';
import { Colors, Fonts } from "../../commonFiles/typography";
import Phone from "../../assets/images/phone.svg"
import Location from "../../assets/images/location.svg"
import { RFValue } from "react-native-responsive-fontsize";
import { TopTabs } from "./components/header";
import { Cart } from "./components/cart";
import * as Animatable from 'react-native-animatable';
import { ZoomInDown } from "react-native-reanimated";

const OrderDetails = () => {
  const [totalAmount, setTotal] = useState(0)
  const [selectedOrder, setSelectedOrder] = useState([])
  const handleViewRef = useRef()

  const renderBottomSection = () => {
    return (
      <View style={styles.bottomSection}>
        <Text style={styles.amount}>{totalAmount}$</Text>

        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['#FF5D79', '#FD003C',]}
          style={styles.payButton}>
          <Text style={styles.payText}>Pay</Text>
        </LinearGradient>
      </View>
    )
  }

  const renderSelectedItem = () => {
    <Animatable.Text ref={this.handleTextRef}>Fade me!</Animatable.Text>
    return (
      <View>
        <Image source={require("../../assets/images/foodTray.png")} style={styles.selectedItem} />
        <View style={styles.selectedcontainer}>

          {selectedOrder.includes(2) && <Animatable.Image animation={'zoomInDown'} ref={handleViewRef}
            source={(require("../../assets/images/item1.png"))} style={styles.selectedFood} />}

          {selectedOrder.includes(1) && <Animatable.Image animation={'zoomInDown'} ref={handleViewRef}
            source={(require("../../assets/images/item2.png"))} style={[styles.selectedFood, { marginHorizontal: scale(0), bottom: 28 }]} />}

          {selectedOrder.includes(0) && <Animatable.Image animation={'zoomInDown'} ref={handleViewRef}
            source={(require("../../assets/images/item3.png"))} style={[styles.selectedFood, { marginHorizontal: scale(-44), }]} />}
        </View>
      </View>
    )
  }

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
      colors={['#F5F5F5', '#FFEDED']}
      style={styles.linearGradient}>
      <ScrollView scrollEnabled={false}>

        <TopTabs />
        <Cart
          setOrder={(order) => {
            selectedOrder.push(order)
            setSelectedOrder(selectedOrder)
          }}
          setTotalAmount={(total) => setTotal(totalAmount + total)} />
        {renderSelectedItem()}
      </ScrollView>

      <View style={styles.contactDetailsContainer}>
        <Location />
        <Text style={styles.address}>Dongcheng District Metro Cultural Building</Text>
        <Phone />
      </View>

      {renderBottomSection()}

    </LinearGradient>
  );
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  bottomSection: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    height: verticalScale(65),
    backgroundColor: '#FFFFFF'
  },
  amount: {
    fontFamily: Fonts.pingFans,
    color: Colors.grey,
    fontSize: RFValue(42),
    fontWeight: '600',
    marginHorizontal: scale(18)
  },
  payText: {
    fontFamily: Fonts.pingFans,
    color: Colors.white,
    fontSize: scale(32),
    fontWeight: '600',
  },
  payButton: {
    width: scale(143),
    height: verticalScale(65),
    justifyContent: 'center',
    alignItems: "center"
  },
  contactDetailsContainer: {
    flexDirection: 'row',
    margin: scale(24)
  },
  address: {
    fontFamily: Fonts.pingFans,
    color: Colors.grey60,
    fontSize: RFValue(14),
    fontWeight: '600',
    marginHorizontal: scale(18)
  },
  selectedItem: {
    width: scale(256),
    height: verticalScale(100),
    marginBottom: verticalScale(32),
    alignSelf: "center",
    position: 'relative'
  },
  selectedFood: {
    width: scale(80),
    height: verticalScale(80),
    resizeMode: 'cover',
    marginHorizontal: scale(-18)
  },
  selectedcontainer: {
    position: "absolute",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "center",
  }

});

export { OrderDetails }