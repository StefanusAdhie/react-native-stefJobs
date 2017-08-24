import React from 'react'
import {
	View,
	Text
} from 'react-native'

import { getToken } from '../config/token'


class SplashScreen extends React.Component {
	render() {
		return(
			<View>
				<Text>Splash</Text>
			</View>
		)
	}

	next(pages) {
		setTimeout(() => {
			this.props.navigation.dispatch({
			  type: 'Navigation/RESET',
			  index: 0,
			  actions: [{ type: 'Navigation/NAVIGATE', routeName: pages }]
			})
		}, 3000)
	}

	componentWillMount() {
		getToken((token) => {
			if(token) {
				// have token
				this.next('Home')
			} else {
				// don't have token
				this.next('Login')
			}
		})
	}
}


module.exports = SplashScreen