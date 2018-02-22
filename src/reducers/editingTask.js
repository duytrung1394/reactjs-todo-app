import * as Types from './../constants/ActionTypes';

var initialState = [];

const editingTask = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDITING_TASK:
            // return task edit
            return action.task;
        default:
            return [...state];
    }
}
export default editingTask;