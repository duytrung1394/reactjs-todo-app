import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            txtSearch : ""
        }
    }
    handleChange = (event) => {
        let target = event.target;
        this.setState({
            txtSearch: target.value
        });
    }
    onSearch = () => {
        // call on Search func in parent component
        this.props.onSearch(this.state.txtSearch);
    }
    render() {
        return ( 
            <div className="col-6">
                <div className="input-group">         
                    <input type="text"
                        className="form-control"
                        placeholder="Nhập tên công việc..."
                        name='txtSearch'
                        value={this.state.txtSearch}
                        onChange={this.handleChange}
                    />
                    <input type="button" className="btn btn-info ml-2" defaultValue="Tìm kiếm" onClick={this.onSearch} />
                </div>
            </div>     
        );
    }
}

export default Search;
