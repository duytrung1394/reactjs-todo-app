import * as Types from './../constants/ActionTypes';

var initialState = "";

const search = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH_TASK:
            return action.txtSearch;
        default:
            return state;
    }
}
export default search;