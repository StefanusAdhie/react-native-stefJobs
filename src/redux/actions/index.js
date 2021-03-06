let nextTodoId = 0;

export const addTodo = text => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
}

export const setVisibilityFilter = filter => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

export const toogleTodo = id => {
	return {
		type: 'TOOGLE_TODO',
		id
	}
}