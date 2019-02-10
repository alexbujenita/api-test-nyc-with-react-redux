const receive_ip = (ip) => {
  return {
    type: "FETCH_IP",
    ip
  }
}

const receive_error = (error) => {
  return {
    type: "FETCH_FAILED",
    err: error
  }
}


export const getIp = () => {
  return (dispatch, getState) => {
    return fetch('https://api.ipify.org?format=json')
      .then(resolvedData => resolvedData.json())
      .then(ip => {
        dispatch(receive_ip(ip));
      })
      .catch(err => dispatch(receive_error(err)));
  };
};
