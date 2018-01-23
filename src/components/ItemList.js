import React from 'react';
import { connect } from 'react-redux';

import ItemListItem from './ItemListItem';
import selectItems from '../selectors/items';

const ItemList = (props) => (
    <div>
        <h1>Items List</h1>
        {props.items.map((item) => {
            return <ItemListItem key={item.id} {...item}/>;
        })}

    </div>
);


const mapStateToProps = (state) => {
    return {
        items: selectItems(state.items, state.filters)
    };
};

export default connect(mapStateToProps)(ItemList);
