import React from 'react'
import {
	View,
	Text
} from 'react-native'

import { connect } from 'react-redux'
import { deletePerson } from '../redux/actions/people'


class RekorPay extends React.Component {
	deletePerson = (person) => {
		this.props.dispatchDeletePerson(person)
	}
	
	render() {
		return(
			<View>
				<Text>RekorPay</Text>

				{
						this.props.people.map((person, index) => (
							<View key = { index }>
								<Text>Name : { person.name }</Text>
								<Text
									onPress = { this.deletePerson.bind(this, person) }>Delete Person</Text>
							</View>
						))
					}
			</View>
		)
	}
}

// module.exports = RekorPay

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
)(RekorPay)