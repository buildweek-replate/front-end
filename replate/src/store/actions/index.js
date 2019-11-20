import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios';







export const authorize = (credentials) => dispatch => {
    dispatch({ type: AUTHORIZE });
    axiosWithAuth()
        .post('', credentials)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILED, payload: err })
        })
}

export const pendingRequests = (e) => dispatch => {
    dispatch({ type: PENDING_REQUESTS });
    e.preventDefault();
    axios.get('https://reqres.in/api/unknown')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.data }));
};