import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddTaskRequest, actEditingTaskRequest, actUpdateTaskRequest } from "./../../actions/index";
class TaskActionPage extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            txtName: "",
            sltLevel: 0,
            title: "Thêm công việc"
        }
    }
    
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
    
        this.setState({
            [name] : value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        let { txtName, sltLevel, id } = this.state;
        let { onAddTask, history, match, onUpdateTask } = this.props;
        let task = {
            id: id,
            name: txtName,
            level: +sltLevel
        }
        
        if(match) {
            // call dispatch(actUpdateTaskRequest)
            
            onUpdateTask(task);
        }else{
            // call dispatch(actAddTaskRequest)
            onAddTask(task);
        }
        // go previous page
        history.goBack();
    }

    componentDidMount() {
        let { match, onEditingTask } = this.props;
        // if exists match, get task on editing
        if(match){
            onEditingTask(match.params.id);
        }
    }

    componentWillReceiveProps(nextProps) {
        // update state with nextProps
        if (nextProps && nextProps.editingTask) {
            let { editingTask } = nextProps;
            this.setState({
                id: editingTask.id,
                txtName: editingTask.name,
                sltLevel: editingTask.level,
                title: "Sửa công việc"
            });
        }
    }

    render() {
        let { title } = this.state;
        return ( 
            <div className="col-12" style={{ marginTop : "25px"}}>
                <h4>{title}</h4>
                <form onSubmit={this.onSave}>
                    <div className='form-group'>
                        <label >Tên công việc</label>
                        <input type="text" placeholder='Tên công việc' className='form-control' 
                                name='txtName'
                                value={this.state.txtName}
                                onChange={this.onChange}
                        />
                    </div>
    
                    <div className='form-group'>
                        <label>Level</label>
                        <select className="form-control" 
                                name='sltLevel' 
                                onChange={this.onChange}
                                value={this.state.sltLevel}
                                >
                            <option value={0}>Small</option>
                            <option value={1}>Medium</option>
                            <option value={2}>Hard</option>
                        </select>
                    </div>

                    <div>
                        <input type='submit' className='btn btn-primary mr-1' value='Lưu lại' />
                        <Link to='/tasks-list' className='btn btn-warning'>Trở lại</Link>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        editingTask : state.editingTask
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask : (task) => {
            dispatch(actAddTaskRequest(task));
        },
        onEditingTask: (id) => {
            dispatch(actEditingTaskRequest(id));
        },
        onUpdateTask: (task) => {
            dispatch(actUpdateTaskRequest(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskActionPage);
