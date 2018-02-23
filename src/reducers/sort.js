import * as Types from './../constants/ActionTypes';

var initialState = {
    by: "name",
    dir: 1
};

const sort = (state = initialState, action) => {
    switch (action.type) {
        case Types.SORT_TASKS:
            return action.sort;
        default:
            return state;
    }
}
export default sort;