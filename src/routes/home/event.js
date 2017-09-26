import {
	TabNavigator
} from 'react-navigation'

import EventTabAkan from '../../pages/home/eventAkan'
import EventTabLalu from '../../pages/home/eventLalu'


const TabNavigatorConfig = {
	tabBarPosition:  'bottom',
	swipeEnabled: false,
  animationEnabled: false
}


const EventTab = TabNavigator({
	EventAkan: {
		screen: EventTabAkan,
		navigationOptions: {
			// header: null
		}
	},
	EventLalu: {
		screen: EventTabLalu,
		navigationOptions: {
			// header: null
		}
	}
}, TabNavigatorConfig)

module.exports = EventTab