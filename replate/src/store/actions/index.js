import { axiosWithAuth } from '../../utils/axiosWithAuth';








export const authorize = (e) => dispatch => {
    dispatch({ type: AUTHORIZE });
    e.preventDefault();
    axiosWithAuth()
        .post('', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
        })
}