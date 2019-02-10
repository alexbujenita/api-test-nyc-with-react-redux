const receive_hospitals = (data) => {
  return {
    type: "FETCH_HOSPITALS",
    data
  }
}

const receive_error = (error) => {
  return {
    type: "FETCH_FAILED",
    err: error
  }
}

export const getHospitals = () => {
  return (dispatch, getState) => {
    return fetch('https://data.cityofnewyork.us/resource/w7a6-9xrz.json')
      .then(data => data.json())
      .then(data => {
        dispatch(receive_hospitals(data));
      })
      .catch(err => dispatch(receive_error(err)));
  };
};
