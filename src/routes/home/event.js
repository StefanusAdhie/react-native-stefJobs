import React from 'react';
import {
	View,
	Text
} from 'react-native';

import {
	TabNavigator
} from 'react-navigation';

import EventTabAkan from '../../pages/home/eventAkan';
import EventTabLalu from '../../pages/home/eventLalu';


const TabNavigatorConfig = {
	tabBarPosition:  'bottom'
}


const EventTab = TabNavigator({
	EventAkan: { screen: EventTabAkan },
	EventLalu: { screen: EventTabLalu }
}, TabNavigatorConfig);

module.exports = EventTab;