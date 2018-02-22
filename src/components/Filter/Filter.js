import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <tr>
                <td />
                <td>
                    <input type="text" className="form-control" placeholder="Nhập tên công việc..." />
                </td>
                <td>
                    <select className="form-control">
                        <option value>Tất cả</option>
                        <option value>Hard</option>
                        <option value>Medium</option>
                        <option value>Small</option>
                    </select>
                </td>
            </tr>
        );
    }
}

export default Filter;
