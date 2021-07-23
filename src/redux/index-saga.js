import productSaga from './form/saga';
import { put, takeEvery, takeLatest, all, select } from 'redux-saga/effects';

export default function* rootSaga () {  
    yield all([
        productSaga(),
    ])
  }