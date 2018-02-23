import React, { Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            level: -1
        }
    }
    handleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;

        // call fliter table func in parent component
        this.props.onFilterTable({
            name : name === "name" ? value: this.state.name,
            level: name === "level" ? +value: +this.state.level  //parseInt {+}
        });
        this.setState({
            [name] : value
        });
    }

    render() {
        return (
            <tr>
                <td />
                <td>
                    <input type="text" className="form-control" 
                            placeholder="Nhập tên công việc..."
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            />
                </td>
                <td>
                    <select className="form-control"
                            name='level'
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                        <option value={-1}>Tất cả</option>
                        <option value={0}>Small</option>
                        <option value={1}>Medium</option>
                        <option value={2}>Hard</option>
                    </select>
                </td>
            </tr>
        );
    }
}

export default Filter;
