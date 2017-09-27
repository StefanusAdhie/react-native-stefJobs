import {
	TabNavigator
} from 'react-navigation'

import DetailScreen from './detail'
import ClassScreen from './class'
import RundownScreen from './rundown'


const TabNavigatorConfig = {
	// tabBarPosition:  'top',
	// swipeEnabled: false,
	// animationEnabled: false
}


const TabEventDetail = TabNavigator({
	Detail: {
		screen: DetailScreen,
		navigationOptions: {
			// header: null
		}
	},
	Class: {
		screen: ClassScreen,
		navigationOptions: {
			// header: null
		}
	},
	Rundown: {
		screen: RundownScreen,
		navigationOptions: {

		}
	}
}, TabNavigatorConfig)

module.exports = TabEventDetail