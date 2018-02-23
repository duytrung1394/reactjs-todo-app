import * as Types from './../constants/ActionTypes';

var initialState = {
    name: "",
    level: -1
};

const filter = (state = initialState, action) => {
    switch (action.type) {
        case Types.FILTER_TABLE:
            return action.filter;
        default:
            return state;
    }
}
export default filter;