import React from 'react'
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


class Gallery extends React.Component {
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
		headerTitle: 'Gallery'
	})

	render() {
		return(
			<View>
				<Text onPress = { () => this.props.navigation.navigate('ScanQR') }>GalleryTab</Text>
			</View>
		)
	}
}

module.exports = Gallery