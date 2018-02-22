import * as Types from './../constants/ActionTypes';

var initialState = [];

var findIndex = (state, id) => {
    let result = -1;
    if(state.length > 0) 
    {
        state.forEach( (item, index) => {
            if(item.id === id) {
                result = index;
            }
        })
    }
    return result;
}
const tasks = (state = initialState, action) => {
    switch(action.type){
        
        case Types.LIST_ALL_TASKS:
            return action.tasks;

        case Types.ADD_TASK: 
            state.push(action.task);
            return [...state];

        case Types.UPDATE_TASK:
            // get index of task
            let indexEdit = findIndex(state, action.task.id);
           
            if (indexEdit !== -1 ){
                state[indexEdit] = action.task;
            }
            return [...state];
        case Types.DELETE_TASK: 
            let index = findIndex(state, action.id);
            if(index !== -1){
                state.splice(index, 1);
            }
            return [...state];
        default:
            return [...state];
    }
} 
export default tasks;