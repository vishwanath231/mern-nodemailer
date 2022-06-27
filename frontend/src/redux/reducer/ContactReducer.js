import {
    CONTACT_REQUEST,
    CONTACT_SUCCESS,
    CONTACT_FAIL
} from '../action/Types';


export const contactReducer = (state = { msg: '' }, {type, payload}) => {

    switch (type) {
        case CONTACT_REQUEST:
            return{
                loading: true,
                msg: ''
            }

        case CONTACT_SUCCESS:
            return {
                loading: false,
                msg: payload
            }
        
        case CONTACT_FAIL:
            return {
                loading: false,
                error: payload
            }
    
        default:
            return state;
    }
}