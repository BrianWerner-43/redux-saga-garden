import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

// this startingPlantArray should eventually be removed
// const startingPlantArray = [
//   { id: 1, name: 'Rose' },
//   { id: 2, name: 'Tulip' },
//   { id: 3, name: 'Oak' }
// ];

function* rootSaga() {
  yield takeLatest('SAGA/GET_PLANTS', getPlants)
}

const plantList = (state = [], action) => {
  switch (action.type) {
    case 'GET_PLANTS':
      return action.payload;
    default:
      return state;
  }
};

function* getPlants() {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/plants'
    })
    yield put({
      type: 'GET_PLANTS',
      payload: response.data
    })
    
  } catch(error) {
    console.log('Getting plants from server faild:', error);
  }
}

const sagaMiddleware = createSagaMiddleware();

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// Note that the store is currently not
// configured to utilize redux-saga OR
// redux logger!
const store = createStore(
  combineReducers({
    plantList
   }),
   applyMiddleware(sagaMiddleware, logger),
);
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥



sagaMiddleware.run(rootSaga);


export default store;
