import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (     
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
        );
    }
}

export default Sort;
