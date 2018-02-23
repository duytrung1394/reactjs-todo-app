import React, { Component } from 'react';
import TasksList from '../../components/TasksList/TasksList';
import TaskItem from '../../components/TaskItem/TaskItem';
import Control from '../../components/Control/Control';
import Filter from './../../components/Filter/Filter';
import { connect } from 'react-redux';
import { actlistAllTasksRequest, actDelTaskRequest, actFilterTable } from './../../actions/index';

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
        this.props.onFilter(filter)
    }

    render() {
        let { tasks, filter } = this.props;
        // console.log(tasks);
        tasks = this.filterTable(tasks, filter);

        return (
            <React.Fragment>
                <Control />
                <TasksList>
                    <Filter onFilterTable={this.onFilterTable} />
                    {this.showTasksList(tasks)}
                </TasksList>
            </React.Fragment>
        );
    }

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

}

const mapStateToProps = (state) => {
    return {
        tasks : state.tasks,
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onListAll: () => {
            dispatch(actlistAllTasksRequest());
        },
        onDelItem: (id) => {
            dispatch(actDelTaskRequest(id))
        },
        onFilter: (filter) => {
            dispatch(actFilterTable(filter))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksListPage);
