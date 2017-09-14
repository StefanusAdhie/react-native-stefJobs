import peopleReducer from '../reducers/people'

export function addPeople(people) {
  return {
    type: 'ADD_PEOPLE',
    people
  }
}

export function deletePeople(people) {
  return {
    type: 'DELETE_PEOPLE',
    people
  }
}