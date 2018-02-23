import React, { Component } from 'react';
import TasksList from '../../components/TasksList/TasksList';
import TaskItem from '../../components/TaskItem/TaskItem';
import Control from '../../components/Control/Control';
import Search from '../../components/Control/Search';
import Sort from '../../components/Control/Sort';
import Filter from './../../components/Filter/Filter';
import { connect } from 'react-redux';
import { actlistAllTasksRequest, actDelTaskRequest, actFilterTable, actSearchTask, actSortTasks } from './../../actions/index';

class TasksListPage extends Component {

    componentDidMount() {
        // call dispatch(actlistAllTasksRequest())
        this.props.onListAll();
    }

    onClickDelItem = (id) => {
        // dispatch(actDelTaskRequest(id))
        this.props.onDelItem(id);
    }

    onFilterTable = (filter) =>{
        this.props.onFilter(filter);
    }

    onSearchTask = (search) => {
        this.props.onSearchTask(search);
    }

    onSortTasks = (sort) => {
        this.props.onSortTasks(sort);
    }
    render() {
        let { tasks, filter, search, sort } = this.props;
        // console.log(sort);
        tasks = this.filterTable(tasks, filter);
        
        tasks = this.searchTask(tasks, search);

        tasks = this.sortTasks(tasks, sort);
        
        return (
            <React.Fragment>
                <Control>
                    <Search onSearch={this.onSearchTask} />
                    
                    <Sort onSort={this.onSortTasks} sort={sort} />

                </Control>
                <TasksList>
                    <Filter onFilterTable={this.onFilterTable} />
                    {this.showTasksList(tasks)}
                </TasksList>
            </React.Fragment>
        );
    }
    // filter func
    filterTable = (tasks, filter) => {
        if(filter){
            
            if(filter.name){
                tasks = tasks.filter( (task) => {
                    return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
                })
            }
            // filter level
            tasks = tasks.filter( (task) => {
                if(filter.level === -1){
                    return task;
                }else{
                    return task.level === filter.level;
                }
            })
            
        }
        
        return tasks;
    }
    // show tasks func
    showTasksList = (tasks) => {
        let result = null;
        if(tasks.length > 0) {
            result = tasks.map((task, index) => {
                return <TaskItem 
                            key={index}
                            task={task}
                            index={index}
                            onDelItem={this.onClickDelItem}
                        />
            });
        }
        return result;
    }
    // search func
    searchTask = (tasks, search) => {
        if(search === ""){
            return tasks;
        }else{
            tasks = tasks.filter( (task) => {
                return task.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            });
            return tasks;
        }
    }
    // sort func
    sortTasks = (tasks, sort) => {
        if(sort.by === "name"){
            tasks = tasks.sort( (a, b) =>{
                if( a.name > b.name) return sort.dir;
                else if(a.name < b.name) return -sort.dir;
                else return 0;
            });
        }
        if(sort.by === "level"){
            tasks = tasks.sort( (a, b) => {
                if(a.level > b.level) return sort.dir;
                else if(a.level < b.level) return -sort.dir;
                else return 0;
            });
        }
        return tasks;
    }
}

const mapStateToProps = (state) => {
    return {
        tasks : state.tasks,
        filter: state.filter,
        search: state.search,
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onListAll: () => {
            dispatch(actlistAllTasksRequest())
        },
        onDelItem: (id) => {
            dispatch(actDelTaskRequest(id))
        },
        onFilter: (filter) => {
            dispatch(actFilterTable(filter))
        },
        onSearchTask: (txtSearch) => {
            dispatch(actSearchTask(txtSearch))
        },
        onSortTasks: (sort) => {
            dispatch(actSortTasks(sort))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksListPage);
