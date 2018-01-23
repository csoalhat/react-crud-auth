import uuid from 'uuid';

export const addItem = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {} ) => ({
    type: 'ADD_ITEM',
    item: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

export const removeItem = ({ id } = {}) => ({
    type: 'REMOVE_ITEM',
    id
});

export const editItem = (id, updates) => ({
    type: 'EDIT_ITEM',
    id,
    updates
});