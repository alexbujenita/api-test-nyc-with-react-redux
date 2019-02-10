const ipReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_IP':
      return state.ip = action.ip;
    default:
      return state;
  }
}
export default ipReducer;
