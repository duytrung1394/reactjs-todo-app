import React, { Component } from 'react';

class Sort extends Component {

    handleSort = (by, dir) =>{
        // call onSort function in parent component
        this.props.onSort({
            by: by,
            dir: dir
        });
    }
    render() {
        let {sort} = this.props;
        let dir = "ASC";
        if(sort.dir === -1) {
            dir = "DESC";
        }
        let sortText = `${sort.by.toUpperCase()}-${dir}`;
        return (     
            <div className="col-3">
                <div className="dropdown show">
                    <a className="btn btn-info dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sắp xếp
                            </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item btn" onClick={() => this.handleSort('name', 1)}>Name-ASC</a>
                        <a className="dropdown-item btn" onClick={() => this.handleSort('name', -1)} >Name-DESC</a>
                        <a className="dropdown-item btn" onClick={() => this.handleSort('level', 1)}>Level-ASC</a>
                        <a className="dropdown-item btn" onClick={() => this.handleSort('level', -1)}>Level-DESC</a>
                    </div>
                    <span className="badge badge-success sort-label">{sortText}</span>
                </div>
            </div>   
        );
    }
}

export default Sort;
