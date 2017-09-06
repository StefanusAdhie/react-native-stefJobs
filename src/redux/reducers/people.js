const initialState = {
	people: [{
		id: 1,
		name: 'Stef'
	}]
}

const peopleReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_PEOPLE':
			/*return {
				people: [...state.people, action.people]
			}*/
			state.people.push(action.people)
			return {
				people: [...state.people]
			}

		case 'DELETE_PEOPLE':
			/*return {
				people: state.people.filter(p => p.name !== action.people.name)
			}*/
			for(var i in state.people) {
				if(state.people[i].id == action.people.id) {
					state.people.splice(i, 1)
				}
			}
			return {
				people: [...state.people]
			}

		case 'EDIT_PEOPLE':
			for(var i in state.people) {
				if(state.people[i].id == action.people.id) {
					state.people.splice(i, 1)
				}
			}
			return {
				people: [...state.people]
			}

		default:
			return state
	}
}

export default peopleReducer