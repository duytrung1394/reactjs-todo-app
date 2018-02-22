import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class TaskItem extends Component {

    delItem = (id) => {
        if(confirm('Bạn chắc chắn muốn xóa không?')){ //eslint-disable-line
            this.props.onDelItem(id);
        }
    }
    render() {
        let {task, index} = this.props;
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{task.name}</td>
                <td>
                    <h6>
                        {this.showLevel(task.level)}
                    </h6>
                </td>
                <td>
                    <Link className="btn btn-warning btn-sm mr-sm-1" to={`/tasks/${task.id}/edit`}>Sửa</Link>
                    <button type="button" className="btn btn-danger btn-sm mr-sm-1" onClick={() => this.delItem(task.id)}>Xóa</button>    
                </td>
            </tr>
        );
    }
    showLevel = (level) => {
        switch(level) {
            case 0:
                return <span className="badge badge-secondary">Small</span>;
            case 1:
                return <span className="badge badge-warning">Medium</span>;
            case 2: 
                return <span className="badge badge-danger">Hard</span>;
            default: 
                return <span className="badge badge-secondary">Small</span>;
        }
    }
}

export default TaskItem;
