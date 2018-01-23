import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import { editItem, removeItem } from '../actions/items';

const Edit = (props) => {
    return (
        <div>
            <ItemForm
                item={props.item}
                onSubmit={(item) => {
                    console.log(item);
                    props.dispatch(editItem(props.item.id, item));
                    props.history.push('/');
                }}
            />

            <button onClick={() => {
                props.dispatch(removeItem({ id: props.item.id }));
                props.history.push('/');
            }}>Remove</button>
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        item: state.items.find((item) => item.id === props.match.params.id)
    };
}
export default connect(mapStateToProps)(Edit);
