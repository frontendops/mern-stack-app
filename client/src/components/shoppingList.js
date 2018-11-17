import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';


class ShoppingList extends Component {


    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }
    render() {
        const { items } = this.props.item;

        return(
            <div>
                
                <ul className="list-group">
                    {
                        items.map(item => {
                            return(
                                <ul className="list-group-item" key={item.id}>
                                    <button className="btn btn-danger btn-sm"
                                            onClick={ this.onDeleteClick.bind(this, item.id) }>&times;</button>
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

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
