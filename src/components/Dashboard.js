import React from 'react';
import ItemList from './ItemList';
import ItemListFilters from './ItemListFilters';

const Dashboard = () => (
    <div>
        <ItemListFilters/>
        <ItemList />
    </div>
)

export default Dashboard;