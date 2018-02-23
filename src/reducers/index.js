import { combineReducers } from 'redux';
import tasks from './tasks';
import editingTask from './editingTask';
import filter from './filter';
import search from './search';

const appReducers = combineReducers({
    tasks,
    editingTask,
    filter, 
    search
});
export default appReducers;
