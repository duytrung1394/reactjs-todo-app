import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Control extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Nhập tên công việc..." />
                        <input type="button" className="btn btn-info ml-2" defaultValue="Tìm kiếm" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="dropdown show">
                        <a className="btn btn-info dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sắp xếp
                                </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item">Action</a>
                            <a className="dropdown-item" >Another action</a>
                            <a className="dropdown-item">Something else here</a>
                        </div>
                        <span className="badge badge-success sort-label">Mới nhất</span>
                    </div>
                </div>
                <div className="col-3">
                    <Link to='/tasks/add' className="btn btn-info">Thêm công việc</Link>
                </div>
            </div>
        );
    }
}

export default Control;
