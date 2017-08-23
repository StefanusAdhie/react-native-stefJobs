import React from 'react';
import {
	View,
	Text
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


class Home extends React.Component {
	render() {
		return(
			<View>
				<Text>HomeTab</Text>

				<Ionicons
					name = 'md-alarm'
					size = {30}
					color = 'black' />
			</View>
		);
	}
};

module.exports = Home;