/*const initialState = {
	profile: []
}*/

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_PROFILE':
			return {
				profile: [...state.profile, action.profile]
			}
		case 'DELETE_PROFILE':
			return {
				profile: state.profile.filter(p => p.name !== action.profile.name)
			}
		default:
			return state
	}
}

export default profileReducer