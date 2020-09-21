import { GET_ITEM, ADD_ITEM, GET_ADDED_ITEMS } from '../actions/types';
import Item_1 from '../assets/classic-tee.jpg';

const initialState = {
    items: [
        {
            id: 1,
            productName: "Classic Tee",
            price: 75,
            productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            sizes: ["S", "M", "L"],
            src: Item_1
        },
        // {
        //     id: 2,
        //     productName: "Dress",
        //     price: 80,
        //     productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        //     sizes: ["S", "M", "L"],
        //     src: Item_1
        // }
    ],
    addedItems:[],
    total: 0
}

export default function(state = initialState, action) {
    
    switch(action.type) {
        case GET_ITEM:
            return {
                ...state
            };
        case ADD_ITEM:
            let addedItem = state.items.find(item => item.id === action.id)
            
            addedItem.selectedSize = action.size;
            let newItem = {productName: addedItem.productName, size: action.size, price: addedItem.price}
            
            return {
                ...state,
                total: state.addedItems.length+1,
                addedItems: [...state.addedItems, newItem]
            }
        default: return state;
    }
}