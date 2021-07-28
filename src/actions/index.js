export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export const fetchAPI = () => (dispatch) => {
  dispatch(requestAPI());
  const END_POINT = 'https://aws.random.cat/meow';
  return fetch(END_POINT)
      .then((r) => r.json())
      .then((data) => dispatch(getPicture(data)));
}
