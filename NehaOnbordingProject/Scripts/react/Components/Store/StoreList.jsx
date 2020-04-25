import React, { Component } from 'react';
import StoreCreate from './StoreCreate.jsx';

export default class StoreTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            StoreList: [],
        };

        this.loadData = this.loadData.bind(this);
        this.showCreateModal = this.showCreateModal.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        this.loadData();


    }
    loadData() {

        $.ajax({
            url: "/Store/GetStoreList",
            type: "GET",
            success: function (data) { this.setState({ StoreList: data }) }.bind(this)
        });

    }
    render() {

        let list = this.state.StoreList;
        console.log("list rendered to table")
        let tableData = null;
        if (list != "") {

            tableData = list.map(Store =>
                < tr key={Store.Id}>
                    <td className="four wide">{Store.Name}</td>
                    <td className="four wide">{Store.Address}</td>

                    <td className="four wide">


                        <button className="ui yellow button"
                            onClick={this.showUpdateModel.bind(this, Store.Id)}>
                            <i className="edit icon"></i>Edit</button>
                    </td>


                    <td className="four wide">
                        <button className="ui red button" onClick={this.handleDelete.bind(this, Store.Id)} >
                            <i className="delete icon"></i>Delete</button>


                    </td>

                </tr>
            )
        }
        return (
            <React.Fragment>
                <div>



                    <StoreCreate
                        onChange={this.onChange}
                        onClose={this.onClose}
                        onCreateSubmit={this.onCreateSubmit}
                        showCreateModel={this.state.showCreateModel} />


                    



                    <table className="ui striped table">
                        <thead>
                            <tr>
                                <th className="four wide">Name</th>
                                <th className="four wide">Address</th>
                                <th className="four wide">Actions</th>
                                <th className="four wide">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData}
                        </tbody>
                    </table>

                </div>
            </React.Fragment >
        )
    }
}