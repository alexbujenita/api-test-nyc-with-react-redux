const hospitalsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_HOSPITALS':
      return state.hospitals = action.data;
    default:
      return state;
  }
}
export default hospitalsReducer;
