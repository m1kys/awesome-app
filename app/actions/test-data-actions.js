const LOAD_TEST_DATA = 'LOAD_TEST_DATA';
const LOAD_TEST_DATA_SUCCESS = 'LOAD_TEST_DATA_SUCCESS';
const LOAD_TEST_DATA_ERROR = 'LOAD_TEST_DATA_ERROR';

import testApiClient from '../test-api-client';

export const loadTestData = () => {
  return dispatch => {
    dispatch({
      type: LOAD_TEST_DATA
    });

    testApiClient.getItems()
      .then(res => {
        dispatch({
          type: LOAD_TEST_DATA_SUCCESS,
          payload: res
        });

        return res;
      })
      .catch(err => {
        console.error(err);
        dispatch({
          type: LOAD_TEST_DATA_ERROR
        });
      });
  }
}

export default {
  LOAD_TEST_DATA,
  LOAD_TEST_DATA_SUCCESS,
  LOAD_TEST_DATA_ERROR
};
