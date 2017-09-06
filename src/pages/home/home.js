import React from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableHighlight
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

import { addPeople, deletePeople } from '../../redux/actions/people'

import QRCode from '../../components/QRCode'


class Home extends React.Component {
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
			</View>
		)
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