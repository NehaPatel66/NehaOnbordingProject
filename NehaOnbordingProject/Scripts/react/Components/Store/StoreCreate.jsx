import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, Form } from 'semantic-ui-react';

export default class StoreCreate extends Component {


    constructor() {
        super();
        this.state = {

            StoreName: '',
            StoreAddress: '',
            Success: { Data: '' }

        };
        this.onCreateSubmit = this.onCreateSubmit.bind(this);
        //this.onClose = this.onClose.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onCreateSubmit() {
        // e.preventDefault();

        let data = { 'Name': this.state.StoreName, 'Address': this.state.StoreAddress };
        console.log(data);//Custome logging
        $.ajax({
            url: "/Stores/CreateStore",
            type: "POST",
            data: data,
            success: function (data) {
                this.setState({ Success: data })
                window.location.reload()
            }.bind(this)
        });
    }
    //onClose() {
    //    this.setState({ showCreateModal: false });
    //    window.location.reload()
    //}

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div  >


                <Modal
                    trigger={<Button className="ui primary button"
                        show={this.state.show}
                        onClick={this.showCreateModal}
                    >New Store</Button>}

                    open={this.state.showCreateModal}
                    size="mini">


                    <Modal.Header> Create Store </Modal.Header>
                    <Modal.Content>
                        <Form className="ui form segment">
                            <Form.Field>
                                <label>Name</label>
                                <input type="text"
                                    name="StoreName"
                                    placeholder='Name'
                                    onChange={this.onChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Address</label>
                                <input type="text" name="StoreAddress" placeholder='Address' onChange={this.onChange} />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button className="ui secondary button" onClick={this.props.onClose}>Cancel</Button>

                        <Button className="ui green button" onClick={this.onCreateSubmit} ><i className="check icon"></i>Create</Button>
                    </Modal.Actions>

                </Modal>

            </div>
        )
    }
}