import shopData from './shop.data';

const INITIAL_STATE = shopData;

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default collectionsReducer