import React from 'react'
import {
	Platform,
	View,
	ScrollView,
	Text,
	TextInput,
	TouchableHighlight,
	Animated
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

import { addPeople, deletePeople } from '../../redux/actions/people'

import QRCode from '../../components/QRCode'


class Home extends React.Component {
	constructor(props) {
    super(props);

    this._animatedValue = new Animated.Value(0);
  }

	static navigationOptions = ({ navigation }) => ({
		headerStyle: {
			/*position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height:(!navigation.state.params ? 0 : navigation.state.params.animatedValue),
      overflow: 'hidden',*/

  		/*position: 'absolute',
      top: (!navigation.state.params ? 0 : navigation.state.params.animatedValue),
      left: 0,
      right: 0,
      overflow: 'hidden',*/
    },
		headerLeft: (
			<TouchableHighlight
				style={{padding: 10}}
				onPress={ () => navigation.navigate('DrawerOpen') } >
				<Ionicons
					name = 'md-menu'
					size = {30}
					color = 'black' />
			</TouchableHighlight>
		)
	})

	state = {
		inputValue: ''
	}

	addPeople = () => {
		if(this.state.inputValue === '') return

		this.props.dispatchAddPeople({
			name: this.state.inputValue
		})

		this.setState({ inputValue: '' })
	}

	deletePeople = (people) => {
		this.props.dispatchDeletePeople(people)
	}

	updateInput = (inputValue) => {
		this.setState({ inputValue })
	}

	render() {
		return(
			<View>
			<ScrollView
        onScroll={ Animated.event([{nativeEvent: {contentOffset: {y: this._animatedValue}}}]) }
        scrollEventThrottle={16}>
				<Text>HomeTab</Text>

				<View>
					<TextInput
						onChangeText = { text => this.updateInput(text) }
						value = { this.state.inputValue }
						placeholder = 'Name' />

					<TouchableHighlight
						onPress = { this.addPeople }>
						<Text>Add People</Text>
					</TouchableHighlight>

					{
						this.props.people.map((people, index) => (
							<View
								key = { index }
								style = {{flexDirection: 'row'}} >
								<Text>Name : { people.id }</Text>
								<Text>Name : { people.name }</Text>

								<Text
									onPress = { this.deletePeople.bind(this, people) }>Delete People</Text>

								<QRCode
				          value = { people.name } />
							</View>
						))
					}
				</View>
				</ScrollView>
			</View>
		)
	}

	componentWillMount() {
    /*const HEADER_MAX_HEIGHT = 200
    const HEADER_MIN_HEIGHT = 60
    const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

    this.props.navigation.setParams({animatedValue: this._animatedValue.interpolate({
	      inputRange: [0, HEADER_SCROLL_DISTANCE],
	      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
	      extrapolate: 'clamp'
	    })
    })*/

  	this.props.navigation.setParams({animatedValue: this._animatedValue.interpolate({
        inputRange: [0, 80],
        outputRange: [0, -80],
        extrapolate: 'clamp'
      })
    })
  }

}

// module.exports = Home

function mapStateToProps (state) {
  return {
    people: state.people.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchAddPeople: (people) => dispatch(addPeople(people)),
    dispatchDeletePeople: (people) => dispatch(deletePeople(people))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)