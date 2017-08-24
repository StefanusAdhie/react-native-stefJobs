import React from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableHighlight
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

import { addPerson, deletePerson } from '../../redux/actions/people'

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

				<View>
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
				          value = { person.name } />
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