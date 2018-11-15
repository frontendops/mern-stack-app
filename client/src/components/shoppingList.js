import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';


class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }
    render() {
        const { items } = this.props.item;

        return(
            <div>
                <button className="btn btn-primary"
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if (name) {
                            this.setState(state => ({items: [...state.items, { id: "507f1f77bcf86cd799439017", name: name}]
                        }));
                        }

                    }}
                    >Add Item</button>
                <ul className="list-group">
                    {
                        items.map(item => {
                            return(
                                <ul className="list-group-item" key={item.id}>
                                    <button className="btn btn-danger btn-sm"
                                            onClick={() => {
                                                //deletes item clicked on if its id does not match it is filtered out
                                                this.setState(state => ({
                                                    items: state.items.filter(chosen => chosen.id !== item.id)
                                                }));
                                            }}>&times;</button>
                                    {item.name}
                                </ul>
                            )
                        })

                    }

                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems })(ShoppingList);
