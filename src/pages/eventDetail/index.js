import React from 'react'
import {
	Animated,
	Text,
	View
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import TabEventDetail from './tabEventDetail'

const HEADER_MAX_HEIGHT = 200
const HEADER_MIN_HEIGHT = 60
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT + HEADER_MIN_HEIGHT


class eventDetail extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		headerTitle: 'Event Detail'
	})

	constructor(props) {
    super(props)

    this._animatedValue = new Animated.Value(0)
  }

	render() {
		const _height = this._animatedValue.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

		return(
			<View style = {{ flex: 1 }}>
				<Animated.View style = {{ height: _height, backgroundColor: '#ccc', alignItems: 'center', justifyContent: 'center' }}>
					<Text> Event Detail </Text>
				</Animated.View>

				<View style = {{ flex: 1 }}>
					<TabEventDetail
						screenProps = {{
							_animatedValue: this._animatedValue
						}} />
				</View>
			</View>
		)
	}
}

export default eventDetail