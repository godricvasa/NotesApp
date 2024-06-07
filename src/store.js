import { createStore } from 'redux';

const initialState = {
  notes: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload] };
    case 'DELETE_NOTE':
      return { ...state, notes: state.notes.filter((_, index) => index !== action.payload) };
    case 'EDIT_NOTE':
      return { ...state, notes: state.notes.map((item, index) => index === action.id ? action.payload : item) };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
