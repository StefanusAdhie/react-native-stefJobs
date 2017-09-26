import React from 'react'
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


class EventLalu extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		headerLeft: (
			<TouchableHighlight
				style={{padding: 10}}
				onPress={ () => navigation.navigate('DrawerOpen') } >
				<Ionicons
					name = 'md-menu'
					size = {30}
					color = 'black' />
			</TouchableHighlight>
		),
		headerTitle: 'Event Lalu'
	})

	render() {
		return(
			<View>
				<Text>EventLaluTab</Text>
			</View>
		)
	}
}

module.exports = EventLalu