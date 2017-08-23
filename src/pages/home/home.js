import React from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableHighlight
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import QRCode from 'react-native-qrcode'

import { connect } from 'react-redux'
import { addPerson, deletePerson } from '../../redux/actions/people'


class Home extends React.Component {
	state = {
		inputValue: ''
	}

	addPerson = () => {
		if(this.state.inputValue === '') return

		this.props.dispatchAddPerson({
			name: this.state.inputValue
		})

		this.setState({ inputValue: '' })
	}

	deletePerson = (person) => {
		this.props.dispatchDeletePerson(person)
	}

	updateInput = (inputValue) => {
		this.setState({ inputValue })
	}

	render() {
		return(
			<View>
				<Text>HomeTab</Text>

				<Ionicons
					name = 'md-alarm'
					size = {30}
					color = 'black' />

				<View>
					<Text>People</Text>

					<TextInput
						onChangeText = { text => this.updateInput(text) }
						value = { this.state.inputValue }
						placeholder = 'Name' />

					<TouchableHighlight
						onPress = { this.addPerson }>
						<Text>Add Person</Text>
					</TouchableHighlight>

					{
						this.props.people.map((person, index) => (
							<View
								key = { index }
								style = {{flexDirection: 'row'}} >
								<Text>Name : { person.name }</Text>

								<Text
									onPress = { this.deletePerson.bind(this, person) }>Delete Person</Text>

								<QRCode
				          value = { person.name }
				          size = { 100 }
				          bgColor = 'red'
				          fgColor = 'white' />
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
    dispatchAddPerson: (person) => dispatch(addPerson(person)),
    dispatchDeletePerson: (person) => dispatch(deletePerson(person))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)