import React, { Component } from 'react';
import TasksList from '../../components/TasksList/TasksList';
import TaskItem from '../../components/TaskItem/TaskItem';
import Control from '../../components/Control/Control';
import Filter from './../../components/Filter/Filter';
import { connect } from 'react-redux';
import { actlistAllTasksRequest, actDelTaskRequest} from './../../actions/index';

class TasksListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        // call dispatch(actlistAllTasksRequest())
        this.props.onListAll();
    }
    onClickDelItem = (id) => {
        // dispatch(actDelTaskRequest(id))
        this.props.onDelItem(id);
    }
    
    render() {
        let { tasks } = this.props;
        // console.log(tasks);
        return (
            <React.Fragment>
                <Control />
                <TasksList>
                    <Filter />
                    {this.showTasksList(tasks)}
                </TasksList>
            </React.Fragment>
        );
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
        tasks : state.tasks
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onListAll: () => {
            dispatch(actlistAllTasksRequest());
        },
        onDelItem: (id) => {
            dispatch(actDelTaskRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksListPage);
