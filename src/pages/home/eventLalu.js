import React from 'react'
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


class EventLalu extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		headerLeft: (
			<TouchableOpacity
				style={{padding: 10}}
				onPress={ () => navigation.navigate('DrawerOpen') } >
				<Ionicons
					name = 'md-menu'
					size = {30}
					color = 'black' />
			</TouchableOpacity>
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