import { combineReducers } from 'redux';
import tasks from './tasks';
import editingTask from './editingTask';

const appReducers = combineReducers({
    tasks,
    editingTask
});
export default appReducers;
