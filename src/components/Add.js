import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import { addItem } from '../actions/items';

const Add = (props) => {
    return (
        <div>
            <h1>Add Item</h1>
            <ItemForm
                onSubmit={(item) => {
                    props.dispatch(addItem(item));
                    props.history.push('/');
                }}
            />
        </div>
    )
}

export default connect()(Add);