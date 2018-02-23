import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Control extends Component {
    render() {
        return (
            <div className="row">
                {this.props.children}
                <div className="col-3">
                    <Link to='/tasks/add' className="btn btn-info">Thêm công việc</Link>
                </div>
            </div>
        );
    }
}

export default Control;
