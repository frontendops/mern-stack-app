import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal,
    Button,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input } from 'reactstrap';

import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModul extends Component {
    state = {
        modul: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modul: !this.state.modul
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {

        }

        this.props.addItem(newItem);

        this.toggle();
    }

    render() {

        return(
            <div>
                <button
                className="btn btn-primary"
                onClick={this.toggle}
                    >Add Item</button>

                <Modal isOpen={this.state.modul} toggle={this.toggle}>
                      <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                      <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                          <FormGroup>
                            <Label for="item">Item</Label>
                            <Input
                              type="text"
                              name="name"
                              id="item"
                              placeholder="Add shopping item"
                              onChange={this.onChange}
                            />
                            <Button color="dark" style={{ marginTop: '2rem' }} block>
                              Add Item
                            </Button>
                          </FormGroup>
                        </Form>
                      </ModalBody>
                    </Modal>

            </div>

        )
    }
}


const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModul);
