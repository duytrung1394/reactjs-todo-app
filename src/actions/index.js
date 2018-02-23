import * as Types from './../constants/ActionTypes';
import callApi from './../utils/callApi';

//get all task
export const actlistAllTasks = ( tasks ) => {
    return {
        type: Types.LIST_ALL_TASKS,
        tasks
    }
}

export const actlistAllTasksRequest = () => {
    return dispatch => {
        return callApi('tasks','GET',null).then(res => {
            dispatch(actlistAllTasks(res.data));
        })
    }
}

// add task
export const actAddTask = (task) => {
    return {
        type: Types.ADD_TASK,
        task
    }
}

export const actAddTaskRequest = (task) => {
    return dispatch => {
        return callApi('tasks','POST',task).then(res => {
            dispatch(actAddTask(res.data));
        });
    }
}
// del task
export const actDelTask = (id) => {
    return {
        type : Types.DELETE_TASK,
        id
    }
}
export const actDelTaskRequest = (id) => {
    return dispatch => {
        return callApi(`tasks/${id}`,'DELETE',null).then(res => {
            dispatch(actDelTask(id))
        })
    }
}

// get task editing
export const actEditingTask = (task) => {
    return {
        type: Types.EDITING_TASK,
        task
    }
}
export const actEditingTaskRequest = (id) => {
    return dispatch => {
        return callApi(`tasks/${id}`,'GET',null).then(res => {
            dispatch(actEditingTask(res.data))
        })
    }
}
// update task
export const actUpdateTask = (task) => {
    return {
        type: Types.UPDATE_TASK,
        task
    }
}
export const actUpdateTaskRequest = (task) => {
    return dispatch => {
        return callApi(`tasks/${task.id}`,'PUT',task).then(res => {
            dispatch(actUpdateTask(task))
        })
    }
}

// filter a table
export const actFilterTable = (filter) => {
    return {
        type: Types.FILTER_TABLE,
        filter
    }
}