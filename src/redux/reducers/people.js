const initialState = {
	people: [{
		name: 'Stef'
	}]
}

const peopleReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_PERSON':
			return {
				people: [...state.people, action.person]
			}
		case 'DELETE_PERSON':
			return {
				people: state.people.filter(p => p.name !== action.person.name)
			}
		default:
			return state
	}
}

export default peopleReducer