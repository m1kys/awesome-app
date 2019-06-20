import actions from '../actions/test-data-actions';

const INITIAL_STATE = {
  items: [],
  isFetching: false
};
  
const testDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.LOAD_TEST_DATA: 
      return Object.assign({}, state, { isFetching: true });
    case actions.LOAD_TEST_DATA_ERROR:
      return Object.assign({}, state, { isFetching: false });
    case actions.LOAD_TEST_DATA_SUCCESS:
      return Object.assign({}, state, { isFetching: false, items: action.payload });
    default:
      return state;
  }
};

export default testDataReducer;