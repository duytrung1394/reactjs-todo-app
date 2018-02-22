import React, { Component } from 'react';

class TasksList extends Component {
    render() {
        return (
            <div className="row">
                <div className="card" style={{ width: '100%' }}>
                    <div className="card-header">
                        Danh sách công việc
                            </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{ width: '10%' }}>#</th>
                                <th scope="col">Tên công việc</th>
                                <th scope="col" style={{ width: '15%' }}>Level</th>
                                <th scope="col" style={{ width: '20%' }}>Hàng động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TasksList;
