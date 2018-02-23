import { combineReducers } from 'redux';
import tasks from './tasks';
import editingTask from './editingTask';
import filter from './filter';

const appReducers = combineReducers({
    tasks,
    editingTask,
    filter
});
export default appReducers;
