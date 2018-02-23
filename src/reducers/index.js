import { combineReducers } from 'redux';
import tasks from './tasks';
import editingTask from './editingTask';
import filter from './filter';
import search from './search';
import sort from './sort';

const appReducers = combineReducers({
    tasks,
    editingTask,
    filter, 
    search,
    sort
});
export default appReducers;
