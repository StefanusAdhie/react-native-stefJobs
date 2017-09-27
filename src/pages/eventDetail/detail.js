import React from 'react'
import {
	Animated,
	Dimensions,
	Text,
	View,
	ScrollView
} from 'react-native'
const { width, height } = Dimensions.get('window')


class DetailScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		headerTitle: 'Event Detail'
	})

	render() {
		console.log(height)
		return (
			<ScrollView
				onScroll = { Animated.event([{nativeEvent: {contentOffset: {y: this.props.screenProps._animatedValue}}}]) }
        scrollEventThrottle = { 16 }>
        <View style = {{ height: height }}>
					<Text> Detail Screen </Text>
				</View>
			</ScrollView>
		)
	}
}

module.exports = DetailScreen