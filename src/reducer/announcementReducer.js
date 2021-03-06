import {
    GET_ANNOUNCEMENT,
    ADD_ANNOUNCEMENT
} from '../actions/types';

const initialState = {
    announcements: [],
    announcement: {},
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ANNOUNCEMENT:
            return {
                ...state,
                announcements: action.payload
            }
        case ADD_ANNOUNCEMENT:
            return {
                ...state,
                announcement: action.payload
            }
        // case GET_BRANCH:
        // case UPDATE_BRANCH:
        //     return {
        //         ...state,
        //         branch: action.payload,
        //         error: null
        //     }
        //     case ADD_BRANCH:
        //         return {
        //             ...state,
        //             branch: action.payload,
        //             error: null
        //         }
        //     case DELETE_BRANCH:
        //     return {
        //         ...state,
        //         branch: action.payload,
        //         error: null
        //     }
        // case GET_HOLIDAY:
        //     return {
        //         ...state,
        //         holiday: action.payload
        //     }
        // case BRANCH_ERROR:
        //     return {
        //         ...state,
        //         error: action.payload.error
        //     }
        default:
            return state;
    }
}