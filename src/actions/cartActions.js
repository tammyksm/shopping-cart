import { GET_ITEM, ADD_ITEM, GET_ADDED_ITEMS } from './types';

export const getItem = () => {
    return {
        type: GET_ITEM
    }
}

export const addItem = (id, size) => {
    return {
        type: ADD_ITEM,
        id: id,
        size: size
    }
}

export const getAddedItems = () => {
    return {
        type: GET_ADDED_ITEMS
    }
}