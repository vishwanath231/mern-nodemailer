import {
    CONTACT_REQUEST,
    CONTACT_SUCCESS,
    CONTACT_FAIL
} from '../action/Types';
import axios from 'axios';


export const postContact = (data) => (dispatch) => {


        dispatch({
            type: CONTACT_REQUEST
        })


        axios.post(`/api/contact`, data)
        .then(res => {

            dispatch({
                type: CONTACT_SUCCESS,
                payload: res.data.msg
            })

        }).catch(err => {
            dispatch({
                type: CONTACT_FAIL,
                payload: err.response.data.msg.response
            })

            // console.log(err.response.data.msg.response);
        })

} 